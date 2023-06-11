package com.app.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.demo.pojos.AccountDetails;
import com.app.demo.pojos.UserDTO;
import com.app.demo.repo.AccountDetailsRepo;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private AccountDetailsRepo userDao;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		AccountDetails user = userDao.findByUsername(username);

		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}

	public AccountDetails save(UserDTO user) {
		AccountDetails newUser = new AccountDetails();

		return userDao.save(newUser);
	}
}