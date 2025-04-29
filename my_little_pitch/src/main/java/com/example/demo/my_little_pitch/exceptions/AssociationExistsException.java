package com.example.demo.my_little_pitch.exceptions;


import com.example.demo.my_little_pitch.errors.ErrorMessage;

/**
 * Thrown to indicate that an association still exists
 */
public class AssociationExistsException extends JavaBankException {

    /**
     * @see JavaBankException#JavaBankException(String)
     */
    public AssociationExistsException() {
        super(ErrorMessage.ASSOCIATION_EXISTS);
    }
}
