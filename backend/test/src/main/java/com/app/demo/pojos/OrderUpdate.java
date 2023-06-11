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
public class OrderUpdate {
	private long adhar_no;
	private long o_id;
	private int car_model;

	private String license_no;

	public OrderUpdate(long adhar_no, long o_id, int car_model) {
		super();
		this.adhar_no = adhar_no;
		this.o_id = o_id;
		this.car_model = car_model;
	}

}
