package com.xlabs.apix.controller;

import com.xlabs.apix.model.mambu.Branch;
import com.xlabs.apix.service.MambuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/mambu")
public class MambuController {

    @Autowired
    private MambuService mambuService;

    @GetMapping("/branches")
    public ResponseEntity<Branch[]> branches() throws Exception{
        return mambuService.branches();
    }

}
