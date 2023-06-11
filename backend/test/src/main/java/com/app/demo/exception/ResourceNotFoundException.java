package com.app.demo.exception;

public class ResourceNotFoundException extends RuntimeException {
	public ResourceNotFoundException(String mesg) {
		super(mesg);
	}

}
