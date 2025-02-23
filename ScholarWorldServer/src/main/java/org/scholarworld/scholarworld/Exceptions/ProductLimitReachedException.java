package org.scholarworld.scholarworld.Exceptions;

public class ProductLimitReachedException extends RuntimeException {
    public ProductLimitReachedException(String message) {
        super(message);
    }
}
