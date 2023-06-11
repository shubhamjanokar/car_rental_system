package com.app.demo.pojos;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "location" })
public class Customer_pickup {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = "order_seq")
	private long o_id;
	private Date p_date;
	private Time p_time;
	private Date r_date;
	private Time r_time;
	@OneToOne(orphanRemoval = true, fetch = FetchType.EAGER)
	@JoinColumn(name = "pincode")
	private Location_Details location;
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "cust", fetch = FetchType.EAGER)
	@PrimaryKeyJoinColumn
	@JsonIgnore
	private List<Orders_Details> order1;

	public Customer_pickup(Date p_date, Time p_time, Date r_date, Time r_time) {
		super();
		this.p_date = p_date;
		this.p_time = p_time;
		this.r_date = r_date;
		this.r_time = r_time;
	}

	public void addorders(Orders_Details orders) {
		if (order1 == null) {
			order1 = new ArrayList<>();
		}
		order1.add(orders);
		orders.setCust(this);
	}

}
