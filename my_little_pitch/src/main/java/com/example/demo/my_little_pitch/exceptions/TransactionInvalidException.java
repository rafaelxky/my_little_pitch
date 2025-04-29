package com.example.demo.my_little_pitch.exceptions;


import com.example.demo.my_little_pitch.errors.ErrorMessage;

/**
 * Thrown to indicate that the transaction was not valid
 */
public class TransactionInvalidException extends JavaBankException {

    /**
     * @see JavaBankException#JavaBankException(String)
     */
    public TransactionInvalidException() {
        super(ErrorMessage.TRANSACTION_INVALID);
    }
}
