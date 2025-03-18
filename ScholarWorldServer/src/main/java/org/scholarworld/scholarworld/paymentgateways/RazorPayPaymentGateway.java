package org.scholarworld.scholarworld.paymentgateways;

import org.springframework.stereotype.Component;

@Component
public class RazorPayPaymentGateway implements PaymentGateway {

    @Override
    public String generatePaymentLink(String orderId, Long amount, String email, String phoneNumber) {
        return "https://razorpay.com";
    }
}
