package org.scholarworld.scholarworld.Services;

import org.scholarworld.scholarworld.paymentgateways.PaymentGateway;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    private final PaymentGateway paymentGateway;

    public PaymentService(PaymentGateway paymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    public String initiatePayment(String orderId, Long amount, String email, String phoneNumber) {
        return paymentGateway.generatePaymentLink(orderId, amount, email, phoneNumber);
    }
}
