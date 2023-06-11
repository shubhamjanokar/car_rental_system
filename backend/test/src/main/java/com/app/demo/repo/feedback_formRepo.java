package com.app.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.pojos.feedback_form;

@Repository
public interface feedback_formRepo extends JpaRepository<feedback_form, Long>{

}
