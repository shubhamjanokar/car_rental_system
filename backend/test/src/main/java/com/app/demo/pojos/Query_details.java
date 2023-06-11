package com.app.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "order" })
public class Query_details {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = "order_seq")
	private long q_id;
	@Column(nullable = false)
	private String query_comments;
	private boolean staus;
	@OneToOne
	@JoinColumn(name = "o_id")
	private Orders_Details order;

	public Query_details(long q_id, String query_comments, boolean staus, Orders_Details order) {
		super();
		this.q_id = q_id;
		this.query_comments = query_comments;
		this.staus = staus;
		this.order = order;
	}

}
