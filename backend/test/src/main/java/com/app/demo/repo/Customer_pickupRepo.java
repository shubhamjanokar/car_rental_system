package com.app.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.pojos.Customer_pickup;

@Repository
public interface Customer_pickupRepo extends JpaRepository<Customer_pickup, Long> {

}
