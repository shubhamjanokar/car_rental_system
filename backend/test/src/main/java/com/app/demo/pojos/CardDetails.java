package com.app.demo.pojos;

import java.sql.Date;

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
public class CardDetails {
	@Column(nullable = true)
	private boolean debit_credit;
	@Column(nullable = true)
	private long card_no;
	@Column(nullable = true)
	private String card_name;
	@Column(nullable = true)
	private int card_cvv;
	@Column(nullable = true)
	private Date card_expiry;
}
