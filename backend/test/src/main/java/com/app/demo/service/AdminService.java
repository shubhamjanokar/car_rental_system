package com.app.demo.service;

import java.util.List;

import com.app.demo.pojos.Car_Details;
import com.app.demo.pojos.Driver_Details;
import com.app.demo.pojos.feedback_form;

public interface AdminService {
	String addCar(Car_Details car);

	List<Car_Details> getAllCars();

	String addDriver(Driver_Details dd);

	List<Driver_Details> getAllDriver();

	List<feedback_form> getAllFeedback();

	String deleteAccountDetails(long lno);

	String deleteDriver_Details(String lno);

	String deleteCar(int dc);
}
