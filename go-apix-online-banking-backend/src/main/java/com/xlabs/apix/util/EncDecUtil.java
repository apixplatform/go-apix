package com.xlabs.apix.util;

import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.util.io.pem.PemObject;
import org.bouncycastle.util.io.pem.PemReader;

import javax.crypto.Cipher;
import java.io.FileReader;
import java.io.IOException;
import java.security.*;
import java.security.spec.EncodedKeySpec;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;
import java.util.function.BiFunction;
import java.util.function.Function;

public class EncDecUtil {
    private static final String MODE = "RSA/None/OAEPWithSHA256AndMGF1Padding";

    private static String encryptText(String text, String keyPath) throws Exception {
        Key publicKey = getRSAPublicFromPemFormat(keyPath);
        Cipher cipher = Cipher.getInstance(MODE, "BC");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);
        return new String(Base64.getUrlEncoder().encodeToString(cipher.doFinal(text.getBytes())));
    }

    private static String decryptText(String text, String keyPath) throws Exception {
        Key privateKey = getRSAPrivateFromPemFormat(keyPath);
        Cipher cipher = Cipher.getInstance(MODE, "BC");
        cipher.init(Cipher.DECRYPT_MODE, privateKey);
        return new String(cipher.doFinal(Base64.getUrlDecoder().decode(text.getBytes())));
    }

    private static PrivateKey getRSAPrivateFromPemFormat(String filename) throws Exception {
        return (PrivateKey) getKeyFromPEMFile(filename, data -> new PKCS8EncodedKeySpec(data), (kf, spec) -> {
            try {
                return kf.generatePrivate(spec);
            } catch (InvalidKeySpecException e) {
                System.out.println("Cannot generate PrivateKey from file: " + filename + e);
                return null;
            }
        });
    }

    private static PublicKey getRSAPublicFromPemFormat(String filename) throws Exception {
        return (PublicKey) getKeyFromPEMFile(filename, data -> new X509EncodedKeySpec(data), (kf, spec) -> {
            try {
                return kf.generatePublic(spec);
            } catch (InvalidKeySpecException e) {
                System.out.println("Cannot generate PublicKey from file: " + filename + e);
                return null;
            }
        });
    }

    private static Key getKeyFromPEMFile(String filename, Function<byte[], EncodedKeySpec> buildSpec,
                                         BiFunction<KeyFactory, EncodedKeySpec, ? extends Key> getKey) throws Exception {
        try {
            // Read PEM Format
            PemReader pemReader = new PemReader(new FileReader(filename));
            PemObject pemObject = pemReader.readPemObject();
            pemReader.close();

            KeyFactory kf = KeyFactory.getInstance("RSA", "BC");
            return getKey.apply(kf, buildSpec.apply(pemObject.getContent()));
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    /**
     * Method to encrypt or decrypt a text using RSA key pair. The algorithm used is "RSA/None/OAEPWithSHA256AndMGF1Padding"
     * Note: Security provider used is BouncyCastle
     *
     * @param text - text to encrypt or decrypt
     * @param keyPath - path of the rsa key (public.key.rsa.pub OR private.key.rsa)
     * @param operation - ENCRYPT or DECRYPT
     * @return encrypted or decrypted text based on the operation.
     * @throws Exception
     */
    public static String encryptDecrypt(String text, String keyPath, String operation) throws Exception {

        String resultText = null;
        try {
            Security.addProvider(new BouncyCastleProvider());

            switch (operation) {
                case "ENCRYPT":
                    resultText = encryptText(text, keyPath);
                    break;
                case "DECRYPT":
                    resultText = decryptText(text, keyPath);
                    break;
                default:
                    break;
            }
        } catch (IOException | GeneralSecurityException e) {
            e.printStackTrace();
        }

        return resultText;
    }
}
