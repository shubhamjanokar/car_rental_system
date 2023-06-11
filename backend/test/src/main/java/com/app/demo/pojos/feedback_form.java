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
public class feedback_form {
	@Id
	private long o_id;
	private int Cleaning_points;
	private int Service_points;
	private String Comments;
	@OneToOne
	@JoinColumn(name = "o_id")
	@MapsId
	private Orders_Details order;

	public feedback_form(long o_id, int cleaning_points, int service_points, String comments) {
		super();
		this.o_id = o_id;
		Cleaning_points = cleaning_points;
		Service_points = service_points;
		Comments = comments;
	}

}
