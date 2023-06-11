package com.app.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.pojos.payment_details;

@Repository
public interface payment_detailsRepo extends JpaRepository<payment_details, Long> {

}
