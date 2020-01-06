package com.xlabs.apix.controller;

import com.xlabs.apix.service.TrustingSocialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/trusting-social")
public class TrustingSocialController {

    @Autowired
    private TrustingSocialService trustingSocialService;

    @GetMapping("/health")
    public String health() throws Exception{
        return "true";
    }

    @GetMapping("/encrypt")
    public String encryptText(@RequestParam("text") String text) throws Exception{
        return trustingSocialService.encryptText(text);
    }

    @GetMapping("/decrypt")
    public String decryptText(@RequestParam("text") String text) throws Exception{
        return trustingSocialService.decryptText(text);
    }
}
