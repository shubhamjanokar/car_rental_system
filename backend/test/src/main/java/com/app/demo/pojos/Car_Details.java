package com.app.demo.pojos;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "us1" })
public class Car_Details {
	@Id
	private int car_model;
	private String insurance_no;
	private String car_type;
	private String car_company;
	private Date insuranceperiod;
	private String car_gear_type;
	private int car_capacity;
	private String car_fuel;
	private double car_rent_per_day;
	private Date car_manufact_year;
	private double car_average;

	public Car_Details(int car_model, String insurance_no, String car_type, String car_company, Date insuranceperiod,
			String car_gear_type, int car_capacity, String car_fuel, double car_rent_per_day, Date car_manufact_year,
			double car_average) {
		super();
		this.car_model = car_model;
		this.insurance_no = insurance_no;
		this.car_type = car_type;
		this.car_company = car_company;
		this.insuranceperiod = insuranceperiod;
		this.car_gear_type = car_gear_type;
		this.car_capacity = car_capacity;
		this.car_fuel = car_fuel;
		this.car_rent_per_day = car_rent_per_day;
		this.car_manufact_year = car_manufact_year;
		this.car_average = car_average;
	}

	@OneToMany(mappedBy = "car1", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JsonIgnore
	private List<Orders_Details> us1;

	public void addorders(Orders_Details or1) {
		if (us1 == null) {
			us1 = new ArrayList<>();
		}
		us1.add(or1);
		or1.setCar1(this);
	}

}
