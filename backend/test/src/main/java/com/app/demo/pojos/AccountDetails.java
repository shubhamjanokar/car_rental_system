package com.app.demo.pojos;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Account_details")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "orders" })
public class AccountDetails {
	@Id
	@Min(value = 1000000000000000L)
	@Max(value = 9999999999999999L)
	private long adhar_no;
	@Column(unique = true, nullable = false)
	private String username;
	@Column(unique = true, nullable = false)
	private String password;
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
	@Column(nullable = false, unique = true)
	@Min(value = 1000000000L)
	@Max(value = 9999999999L)
	private long mob_no;
	@Column(unique = true)
	private String license_no;
	@Enumerated(EnumType.STRING)
	private Role role;
	@OneToMany(mappedBy = "user", cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Orders_Details> orders;

	public void addorderin(Orders_Details or1) {
		if (orders == null) {
			orders = new ArrayList<>();
		}
		orders.add(or1);
		or1.setUser(this);
	}

	public AccountDetails(@Min(1000000000000000L) @Max(9999999999999999L) long adhar_no, String username,
			String password, String adhar_name, @Valid Address address, Date dob, boolean gender, String email,
			@Min(1000000000L) @Max(9999999999L) long mob_no, String license_no, Role role) {
		super();
		this.adhar_no = adhar_no;
		this.username = username;
		this.password = password;
		this.adhar_name = adhar_name;
		this.address = address;
		this.dob = dob;
		this.gender = gender;
		this.email = email;
		this.mob_no = mob_no;
		this.license_no = license_no;
		this.role = role;
	}

}
