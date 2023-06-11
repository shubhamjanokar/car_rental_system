package com.app.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.pojos.Query_details;

@Repository
public interface Query_DetailsRepo extends JpaRepository<Query_details, Long>{

}
