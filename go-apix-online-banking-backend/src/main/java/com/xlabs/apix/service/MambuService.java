package com.xlabs.apix.service;

import com.xlabs.apix.model.mambu.Branch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;

@Service
public class MambuService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${mambu.credentials.username}")
    private String username;

    @Value("${mambu.credentials.password}")
    private String password;

    @Value("${mambu.urls.branches}")
    private String branchesUrl;

    public ResponseEntity<Branch[]> branches() throws Exception{
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
        headers.add("Accept", "application/json");
        headers.add("Content-Type", "application/json");
        headers.add("Authorization", "Basic " + Base64.getEncoder().encodeToString((username + ":" + password).getBytes()));

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<Branch[]> result = restTemplate.exchange(branchesUrl, HttpMethod.GET, entity,  Branch[].class);
        return result;
    }

}
