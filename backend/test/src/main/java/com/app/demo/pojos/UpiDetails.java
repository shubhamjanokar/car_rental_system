package com.app.demo.pojos;

import javax.persistence.Column;
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

public class UpiDetails {
	@Column(nullable = true)
	public boolean upi;
	@Column(nullable = true)
	public String upi_id;
	@Column(nullable = true)
	public String upi_name;
}
