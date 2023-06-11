package com.app.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.demo.pojos.Orders_Details;

@Repository
public interface Orders_DetailsRepo extends JpaRepository<Orders_Details, Long> {
	@Query("SELECT u FROM Orders_Details u WHERE u.user.adhar_no = :id")
	List<Orders_Details> findallorders(@Param("id") long o_id);

}
