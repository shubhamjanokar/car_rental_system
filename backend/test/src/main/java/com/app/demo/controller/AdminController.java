package com.app.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.demo.pojos.Car_Details;
import com.app.demo.pojos.Driver_Details;
import com.app.demo.pojos.feedback_form;
import com.app.demo.service.AdminServiceImpl;

@CrossOrigin("*")
@RestController
public class AdminController {

	@Autowired
	private AdminServiceImpl adminSer;

	@PostMapping("/admin/car/add")
	public String saveCar(@RequestBody Car_Details e) {
		String c1 = adminSer.addCar(e);
		return c1;
	}

	@RequestMapping("/car")
	public List<Car_Details> showCars() {
		return adminSer.getAllCars();

	}

	@PostMapping("/admin/driver/add")
	public String saveDriver(@RequestBody Driver_Details dd) {
		return adminSer.addDriver(dd);

	}

	@RequestMapping("/driver")
	public List<Driver_Details> showDriver() {
		return adminSer.getAllDriver();

	}

	@RequestMapping("/admin/feedback")
	public List<feedback_form> showFeedback() {
		return adminSer.getAllFeedback();

	}

	@DeleteMapping("/admin/driver/delete/{dd}")
	public String deleteDriver(@PathVariable String dd) {
		String d2 = adminSer.deleteDriver_Details(dd);
		return d2;

	}

	@DeleteMapping("/admin/user/delete/{uid}")
	public String deleteUser(@PathVariable long uid) {
		String d2 = adminSer.deleteAccountDetails(uid);
		return d2;

	}

	@DeleteMapping("/admin/car/delete/{uid}")
	public String deleteCar(@PathVariable int uid) {
		String d2 = adminSer.deleteCar(uid);
		System.out.println("out print");
		return d2;

	}
}
