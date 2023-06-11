package com.app.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.pojos.after_return_form;

@Repository
public interface after_return_formRepo extends JpaRepository<after_return_form, Long>{

}
