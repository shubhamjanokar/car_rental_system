package com.app.demo.pojos;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "order" })
public class after_return_form {
	@Id
	private long o_id;
	private String Condition_after_return;
	private String Comments;
	@OneToOne
	@JoinColumn(name = "o_id")
	@MapsId
	private Orders_Details order;
}
