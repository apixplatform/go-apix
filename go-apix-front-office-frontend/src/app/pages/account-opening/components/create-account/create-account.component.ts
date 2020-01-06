import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { SmartBankService } from '@app/core/loan-process/smart-bank/smart-bank.service';
import { ApixService } from '@app/core/loan-process/apix/apix.service';
import { EmailVerificationService } from '@app/core/loan-process/email-verification/email-verification.service';
import { Router } from '@angular/router';
import { Subject, fromEvent } from 'rxjs';
import {
  debounceTime,
  map,
  filter,
  distinctUntilChanged
} from 'rxjs/operators';
@Component({
  selector: 'dc-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit, AfterViewInit {
  schemes: any = ['BBAN', 'IBAN'];
  schemeName: any;
  hasErrors: boolean;
  modelChanged: Subject<string> = new Subject<string>();
  @ViewChild('emailFieldInput', { static: false }) emailFieldInput: ElementRef;
  accountHolderName: string;
  nickName: string;
  email: string;
  password: string;
  confirmPassword: string;
  cardFacility: boolean;
  APIXToken: any;
  // DevApixToken: any =
  //   '';
  emailValidated: boolean;

  account: any;

  errorMessage: string;
  passwordValid: boolean;
  validEmail: boolean;
  invalidEmail: boolean;
  cardFacilityText: string;
  loading: boolean;
  passwordInvalid: boolean;
  emailBlacklisted: boolean;

  accountDetails: any;

  constructor(
    private smartBankService: SmartBankService,
    private apixService: ApixService,
    private emailVerficationService: EmailVerificationService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    fromEvent(this.emailFieldInput.nativeElement, 'keyup')
      .pipe(
        // get value
        map((event: any) => {
          return event.target.value;
        }),
        // if character length greater then 2
        filter(res => res.length > 2),
        // Time in milliseconds between key events
        debounceTime(1000),
        // If previous query is diffent from current
        distinctUntilChanged()
        // subscription for response
      )
      .subscribe((text: string) => {
        this.onEmailValueChange(text);
      });
  }
  ngOnInit() {
    this.validEmail = false;
    this.invalidEmail = false;
    this.accountDetails = JSON.parse(localStorage.getItem('accountDetails'));
    this.accountHolderName = this.accountDetails ? this.accountDetails.accountName : undefined;
    this.apixService.getAPIXToken().subscribe(data => {
      this.APIXToken = data.access_token;
      if (this.APIXToken.includes('Invalid')) {
        console.log(
          'Please check if you have set valid APIX credentials in your API config.'
        );
      }
    });
  }

  onOptionsSelected(event) {
    this.schemeName = this.schemes[event];
    console.log(this.schemeName);
  }

  onEmailValueChange(emailValue: string): void {
    console.log('Email validating');
    this.smartBankService
      .verifyEmail(this.APIXToken, emailValue)
      .subscribe(data => {
        if (data === true) {
          this.emailVerficationService
            .validateEmailWithIcf(this.APIXToken, emailValue)
            .subscribe(verifiedData => {
              if (
                verifiedData.objects === undefined ||
                verifiedData.objects.length === 0
              ) {
                this.emailValidated = data;
                this.validEmail = true;
                this.invalidEmail = false;
                this.emailBlacklisted = false;
              } else {
                verifiedData.objects.forEach(element => {
                  console.log(element);
                  if (element.x_security_category === 'blacklist') {
                    this.emailBlacklisted = true;
                    this.validEmail = false;
                    this.invalidEmail = false;
                  } else {
                    this.validEmail = true;
                    this.invalidEmail = false;
                    this.emailBlacklisted = false;
                  }
                });
              }
            });
        } else {
          this.invalidEmail = true;
          this.validEmail = false;
          this.emailBlacklisted = false;
          console.log('email entered is not valid');
        }
      });
  }

  onPasswordEnter(passwordValue: string): void {
    if (this.confirmPassword === this.password) {
      this.passwordValid = true;
      this.passwordInvalid = false;
    } else {
      this.passwordValid = false;
      this.passwordInvalid = true;
    }
  }

  submitInfo() {
    this.loading = true;
    if (this.cardFacility === true) {
      this.cardFacilityText = 'Y';
    } else {
      this.cardFacilityText = 'N';
    }

    console.log(this.cardFacility);
    let splitted = this.accountHolderName.split(' ');
    this.nickName = splitted[0];

    this.smartBankService
      .createAccount(
        this.APIXToken,
        this.accountHolderName,
        this.nickName,
        this.schemeName,
        this.cardFacilityText
      )
      .subscribe(accountData => {
        this.account = JSON.parse(JSON.stringify(accountData));

        if (accountData != null) {
          this.smartBankService
            .createParty(this.APIXToken, this.accountHolderName)
            .subscribe(
              partyData => {
                const partyId = partyData.partyId;
                const accountId = accountData.accountId;

                this.smartBankService
                  .createUserLogin(
                    this.APIXToken,
                    partyId,
                    this.email,
                    this.password,
                    this.nickName,
                    this.accountHolderName
                  )
                  .subscribe(loginData => {
                    console.log('login', loginData);

                    this.smartBankService
                      .setOwner(this.APIXToken, accountId, partyId)
                      .subscribe(
                        response => {
                          const partyDetails = response.party;

                          this.accountDetails = {
                            accountId: this.account.accountId,
                            accountIdentification: this.account
                              .accountIdentification,
                            partyId: partyDetails.partyId,
                            accountName: accountData.accountName,
                            nickname: accountData.nickname,
                            schemeName: accountData.schemeName,
                            secondaryIdentification:
                              accountData.secondaryIdentification,
                            email: this.email
                          };

                          localStorage.setItem(
                            'accountDetails',
                            JSON.stringify(this.accountDetails)
                          );
                          
                          
                          this.smartBankService.giftMoney(this.APIXToken, this.account.accountId, 10).subscribe(data=> {
                            this.loading = false;
                            this.router.navigate(['/account-opening']);
                          }, error => {
                            console.log(error);
                          })

                          
                        },
                        error => this.throwSmartBankError(error)
                      );
                  });
              },
              error => this.throwSmartBankError(error)
            );

          console.log(accountData);
        } else {
          this.errorMessage = 'Account Creation Failed';
        }
      });
  }

  throwSmartBankError(error: any): void {
    console.error(error);
  }
}
