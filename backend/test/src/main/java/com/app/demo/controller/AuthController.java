package com.app.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.demo.pojos.JwtAuthRequest;
import com.app.demo.pojos.JwtAuthResponse;
import com.app.demo.security.JwtTokenHelper;

@CrossOrigin
@RestController
public class AuthController {

	@Autowired
	private JwtTokenHelper jwtTokenHelper;

	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/")
	public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception {
		System.out.println("Authenticating in Auth Controller" + request);
		authenticate(request.getUsername(), request.getPassword());
		UserDetails Details = userDetailsService.loadUserByUsername(request.getUsername());
		String token = jwtTokenHelper.generateToken(Details);
		JwtAuthResponse response = new JwtAuthResponse();
		response.setToken(token);
		return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
	}

	private void authenticate(String username, String password) throws Exception {

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}

	}
}
