package com.app.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.pojos.Driver_Details;

@Repository
public interface Driver_DetailsRepo extends JpaRepository<Driver_Details, String>{

}
