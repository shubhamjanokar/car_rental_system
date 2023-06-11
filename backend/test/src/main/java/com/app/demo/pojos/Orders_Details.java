package com.app.demo.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Orders_Details {
	@Id
	private long o_id;

	@ManyToOne
	@JoinColumn(name = "adhar_no")
	private AccountDetails user;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "o_id")
	@MapsId
	private Customer_pickup cust;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "car_model")
	private Car_Details car1;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "license_no")
	private Driver_Details dr1;
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "order")
	@PrimaryKeyJoinColumn
	@JsonIgnore
	private feedback_form f1;
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "order")
	@PrimaryKeyJoinColumn
	private payment_details p1;
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "order")
	@PrimaryKeyJoinColumn
	@JsonIgnore
	private after_return_form afr1;

	public void addorderinpdetails(payment_details p2) {
		this.p1 = p2;
		p2.setOrder(this);

	}

	public void addorderinfdetails(feedback_form p2) {
		this.f1 = p2;
		p2.setOrder(this);

	}

	public void addorderinadetails(after_return_form p2) {
		this.afr1 = p2;
		p2.setOrder(this);

	}

}
