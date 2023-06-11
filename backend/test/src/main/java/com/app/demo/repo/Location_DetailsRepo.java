package com.app.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.pojos.Location_Details;

@Repository
public interface Location_DetailsRepo extends JpaRepository<Location_Details, Integer>{

}
