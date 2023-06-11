package com.app.demo.pojos;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.hibernate.validator.constraints.Length;

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
public class Driver_Details {
	@Id
	private String license_no;
	@Column(nullable = false)
	private String adhar_name;
	@Embedded
	@Valid
	@Column(nullable = false)
	private Address address;
	private Date dob;
	@Column(nullable = false)
	private boolean gender;
	@Column(nullable = false)
	private String email;

	@Max(value = 9999999999999999L)
	@Min(value = 1000000000000000L)
	@Column(nullable = false, unique = true)
	private long adhar_no;
	@Column(nullable = false, unique = true)
	@Max(value = 9999999999L)
	@Min(value = 1000000000L)
	private int mob_no;
	@OneToMany(mappedBy = "dr1", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JsonIgnore
	private List<Orders_Details> us1;

	public Driver_Details(String license_no, String adhar_name, @Valid Address address, Date dob, boolean gender,
			String email, @Length(min = 16, max = 16, message = "Invalid Number") long adhar_no,
			@Length(min = 10, max = 10, message = "Mobile no should be of 10 digits") int mob_no) {
		super();
		this.license_no = license_no;
		this.adhar_name = adhar_name;
		this.address = address;
		this.dob = dob;
		this.gender = gender;
		this.email = email;
		this.adhar_no = adhar_no;
		this.mob_no = mob_no;
	}

	public void addorders(Orders_Details or1) {
		if (us1 == null) {
			us1 = new ArrayList<>();
		}
		us1.add(or1);
		or1.setDr1(this);
	}

}
