import { Component, OnInit } from '@angular/core';
import {
  faCode,
  faRetweet,
  faExclamationTriangle,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'dc-slider-developer-tools',
  templateUrl: './slider-developer-tools.component.html',
  styleUrls: ['./slider-developer-tools.component.scss']
})
export class SliderDeveloperToolsComponent implements OnInit {
  longArrowAltRight = faLongArrowAltRight;
  items = [
    {
      label: 'HTML Structure',
      code: `
<header class="main-header">
    ...
</header>

<div class="main-body">
    <nav class="side-nav">
        ...
    </div>

    <main>
        ...
    </main>

    <aside class="quick-view">
        ...
    </div>
</div>

<footer class="main-footer">
    ...
</footer>`,
      lang: 'html',
      icon: faCode
    },
    {
      label: 'SASS compiler',
      code: `
    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');
    
    gulp.task('sass', function () {
        return gulp
            .src('../sass/*.scss')
            .pipe(sass({
                includePaths: ['./bower_components']
            }))
            .pipe(autoprefixer({
                browsers: ['last 2 version', '> 5%']
            }))
            .pipe(gulp.dest('./css'));
    });
    
    gulp.task('default', ['scss']);`,
      lang: 'javascript',
      icon: faSass
    },
    {
      label: 'Ajax enabled',
      code: `
    var apiUrl = 'https://api.5studios.net/';

    this.getLoggedUser = function() {
        return $.ajax({
            url: apiUrl + 'user/login?inc=name,location,email,picture',
            dataType: 'json'
        });
    };
    
    this.getPendingTasks = function () {
        return $.getJSON(apiUrl + 'data/tasks/pending', function() {
            console.log("Tasks loaded");
        });`,
      lang: 'javascript',
      icon: faRetweet
    },
    {
      label: 'Form validation',
      code: `
    $("#register-form").validate({
      rules: {
        username: {
          required: true,
          minLength: 2,
          remote: "register.php"
        }
      },
      messages: {
        username: {
          required: "Enter your username",
          minLength: "At least 2 characters are necessary",
          remote: String.format("The name {0} is already in use")
        }
      }
    });`,
      lang: 'javascript',
      icon: faExclamationTriangle
    }
  ];
  currentSlide: number = 0;

  constructor() {}

  ngOnInit() {}

  updateSlider(currentSlide) {
    this.currentSlide = currentSlide;
  }

  public onIndexChange(index: number): void {
    this.currentSlide = index;
  }
}
