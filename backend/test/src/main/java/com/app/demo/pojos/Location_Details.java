package com.app.demo.pojos;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Location_Details {
	@Id
	private int pincode;
	private String b_no;
	private String street;
	private String city;
	private String state;

}
