package com.app.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "order" })
public class payment_details {
	@Id
	private long o_id;
	@NotNull
	private double total_amount;
	@Embedded
	private CardDetails cards;
	@Column(nullable = true)
	private boolean cash;
	@Embedded
	private UpiDetails upi;
	@Column(nullable = true)
	private boolean razorpay;
	@OneToOne
	@JoinColumn(name = "o_id")
	@MapsId
	@JsonIgnore
	private Orders_Details order;

	public void addorderinpayment(Orders_Details or1) {

	}
}
