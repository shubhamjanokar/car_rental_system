package com.app.demo.pojos;

import com.fasterxml.jackson.annotation.JsonEnumDefaultValue;

public enum Role {
	@JsonEnumDefaultValue
	USER, ADMIN
}
