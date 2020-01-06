package com.xlabs.apix.service;

import com.xlabs.apix.util.EncDecUtil;
import org.springframework.stereotype.Service;

@Service
public class TrustingSocialService {

    public String encryptText(String text) throws Exception{
        return EncDecUtil.encryptDecrypt(text, "staging_telco_public_key.pub", "ENCRYPT");
    }

    public String decryptText(String text) throws Exception{
        return EncDecUtil.encryptDecrypt(text, "apix-private.key.rsa", "DECRYPT");    }
}
