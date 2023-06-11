package com.app.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.demo.pojos.AccountDetails;

@Repository
public interface AccountDetailsRepo extends JpaRepository<AccountDetails, Long> {

	Optional<AccountDetails> findByUsernameAndPassword(String username, String pass);

	AccountDetails findByUsername(String username);

}
