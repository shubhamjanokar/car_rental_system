package com.app.demo.pojos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
@AllArgsConstructor
public class OrderCreate {
	private String username;
	private String password;
	private long o_id;
	private int car_model;

	private String license_no;

}
