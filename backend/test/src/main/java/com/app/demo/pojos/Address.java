package com.app.demo.pojos;

import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Address {

	private int pincode;
	private String b_no;
	private String street;
	private String city;
	private String state;
	


}
