package org.scholarworld.scholarworld.advices;

import org.scholarworld.scholarworld.Exceptions.ProductLimitReachedException;
import org.scholarworld.scholarworld.dtos.ExceptionDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class ExceptionHandler {

    @org.springframework.web.bind.annotation.ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleException() {
        System.out.println("Something went wrong: ");
        return  new ResponseEntity<>("Something went wrong", HttpStatus.NOT_FOUND);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(ProductLimitReachedException.class)
    public ResponseEntity<ExceptionDto> ProductLimitReachedException() {
        System.out.println("Index out of bounds exception");
        ExceptionDto exceptionDto = new ExceptionDto();
        exceptionDto.setMessage("Index out of bounds exception");
        exceptionDto.setErrorCode("PRODUCT_LIMIT_REACHED");
        return new ResponseEntity<>(exceptionDto, HttpStatus.NOT_FOUND);
    }
}
