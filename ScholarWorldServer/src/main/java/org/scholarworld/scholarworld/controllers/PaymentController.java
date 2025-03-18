package org.scholarworld.scholarworld.controllers;


import org.scholarworld.scholarworld.Services.PaymentService;
import org.scholarworld.scholarworld.dtos.InitiatePaymentDto;
import org.springframework.context.PayloadApplicationEvent;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public String initiatePayment(@RequestBody InitiatePaymentDto initiatePaymentDto) {
        return paymentService.initiatePayment(initiatePaymentDto.getOrderId(), initiatePaymentDto.getAmount(), initiatePaymentDto.getEmail(), initiatePaymentDto.getPhoneNumber());
    }






}
