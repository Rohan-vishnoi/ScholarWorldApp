package org.scholarworld.scholarworld.dtos;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestMapping;

@Setter
@Getter
public class InitiatePaymentDto {
    private Long amount;
    private String email;
    private String phoneNumber;
    private String orderId;
}
