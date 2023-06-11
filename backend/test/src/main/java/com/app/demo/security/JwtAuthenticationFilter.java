package com.app.demo.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.app.demo.service.JwtUserDetailsService;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	@Autowired
	private JwtTokenHelper jwtTokenHelper;

	@Autowired
	private JwtUserDetailsService userdetails;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		// get.token
		String requestToken = request.getHeader("Authorization");
		// bearer
		System.out.println(requestToken);
		String username = null;
		String token = null;

		if (requestToken != null && requestToken.startsWith("Bearer ")) {

			token = requestToken.substring(7);
			try {
				username = jwtTokenHelper.getUsernameFromToken(token);
				System.out.println("username");

			} catch (IllegalArgumentException e) {
				System.out.println("unable to get jwt token");
			} catch (ExpiredJwtException e) {
				System.out.println("Jwt token has exprired");
			} catch (MalformedJwtException e) {
				System.out.println("invalid Jwt");
			}
		} else {
			System.out.println("jwt token not bearrer with error");
		}

		// once we get token , now validate
		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = this.userdetails.loadUserByUsername(username);
			if (jwtTokenHelper.validateToken(token, userDetails)) {

				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken
						.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

			} else {
				System.out.println("invalid token");
			}

		} else {
			System.out.println("username is null nad context is not null");

		}
		filterChain.doFilter(request, response);

	}

}
