package com.app.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.demo.pojos.AccountDetails;
import com.app.demo.pojos.Authentication;
import com.app.demo.pojos.Car_Details;
import com.app.demo.pojos.Customer_pickup;
import com.app.demo.pojos.Driver_Details;
import com.app.demo.pojos.Location_Details;
import com.app.demo.pojos.OrderCreate;
import com.app.demo.pojos.OrderUpdate;
import com.app.demo.pojos.Orders_Details;
import com.app.demo.pojos.Query_details;
import com.app.demo.pojos.after_return_form;
import com.app.demo.pojos.feedback_form;
import com.app.demo.pojos.payment_details;
import com.app.demo.service.AccountDetailsService;

@CrossOrigin("*")
@RestController
public class AccDetailsController {

	@Autowired
	private AccountDetailsService accServ;

	public AccDetailsController() {
		System.out.println("In Home Controller " + getClass());
	}

	@RequestMapping("/")
	public List<AccountDetails> allDetails1() {
		List<AccountDetails> list = accServ.getAllAccountDetails();
		System.out.println(list);
		return list;

	}

	@RequestMapping("/admin/query")
	public List<Query_details> allDetails() {

		List<Query_details> list = accServ.getAllQueryDetails();
		System.out.println(list);
		return list;
	}

	@PostMapping("/register")
	public String saveEmployee(@RequestBody AccountDetails e) {
		System.out.println(e);
		String s1 = accServ.addAccDetails(e);
		System.out.println("User Added with Details" + s1);
		return "USER ADDED";
	}

//	@PostMapping("/user/login")
//	public AccountDetails ProcessLoginForm(@RequestParam String username, @RequestParam String password) {
//		System.out.println("in process login form " + username + " " + password);
//
//		return accServ.authenticateUser(username, password);
//
//	}
	@PostMapping("/login")
	public AccountDetails ProcessLoginForm(@RequestBody Authentication a1) {
		System.out.println("in process login form " + a1.getUsername() + " " + a1.getPassword());

		return accServ.authenticateUser(a1.getUsername(), a1.getPassword());

	}

	@PostMapping("/query")
	public String saveQuery(@RequestBody Query_details q) {
		String s2 = accServ.addQueryDetails(q);
		return s2;

	}

	@PostMapping("/user/feedback")
	public String saveFeedback(@RequestBody feedback_form f) {
		String s1 = accServ.feedback(f);
		return s1;
	}

	@GetMapping("/location")
	public List<Location_Details> allLocationDetails() {
		List<Location_Details> list = accServ.getAllLocation_Details();
		System.out.println(list);
		return list;

	}

	@GetMapping("/admin/location")
	public List<Location_Details> allLocationDetails1() {
		List<Location_Details> list = accServ.getAllLocation_Details();
		System.out.println(list);
		return list;

	}

	@DeleteMapping("/user/query/delete/")

	public String deleteQuery(@RequestParam long q) {
		String s2 = accServ.deleteQuery_Details(q);
		return s2;

	}

	@PostMapping("/admin/location/add")

	public String savelocation(@RequestBody Location_Details l) {
		String s3 = accServ.addLocation_Details(l);
		return s3;

	}

	@DeleteMapping("/admin/location/delete/{lr1}")
	public String deleteLocation(@PathVariable int lr1) {
		String s3 = accServ.deleteLocation_Details(lr1);
		return s3;
	}

	@GetMapping("/user/pickup")
	public List<Customer_pickup> getalldetails() {

		return accServ.getdetailsoforder();

	}

	@PostMapping("/user/pickup/add")
	public Customer_pickup addorders(@RequestBody Customer_pickup cp1) {
		Customer_pickup s1 = accServ.addorderinpickup(cp1);
		return s1;
	}

	@GetMapping("/user/orderdetails")
	public List<Orders_Details> getallorders() {

		return accServ.allorderdetails();
	}

	@PostMapping("/user/orderdetails/update")
	public OrderUpdate createorder(@RequestBody OrderCreate o1) {
		OrderUpdate s2 = accServ.onupdate(o1.getUsername(), o1.getPassword(), o1.getO_id(), o1.getCar_model(),
				o1.getLicense_no());
		return s2;
	}

	@PutMapping("/user/feedback/add")
	public String updateform(@RequestBody feedback_form f2) {
		return accServ.updatefeedback(f2);
	}

	@GetMapping("/user/feedback")
	public List<feedback_form> updateform() {
		return accServ.updateforms();
	}

	@GetMapping("/user/returnform")
	public List<after_return_form> showreturnform() {
		return accServ.showforms();
	}

	@PutMapping("/user/returnform/add")
	public String updatereturn(@RequestBody after_return_form a2) {

		return accServ.updateafterreturn(a2);
	}

	@GetMapping("/user/paymentdetails")
	public List<payment_details> showpaymentdetails() {
		return accServ.showpdetails();
	}

	@PutMapping("/user/paymentdetails/add")
	public String updatepayment(@RequestBody payment_details p2) {

		return accServ.updatepayment(p2);
	}

	@GetMapping("/user/car/{car_model}")
	public Car_Details getcar(@PathVariable int car_model) {

		return accServ.findCar(car_model);
	}

	@GetMapping("/user/driver/{license_no}")
	public Driver_Details getDriver(@PathVariable String license_no) {
		return accServ.finddriver(license_no);
	}

	@GetMapping("/user/payment/{o_id}")
	public payment_details getpayment(@PathVariable long o_id) {

		return accServ.getpayment(o_id);
	}

	@GetMapping("/ordersdetails/{o_id}")
	public List<Orders_Details> getallordersdetails(@PathVariable long o_id) {
		return accServ.getallorders(o_id);
	}

	@GetMapping("/feedback/{o_id}")
	public feedback_form getdfeedbacketails(@PathVariable long o_id) {
		return accServ.getfeedback(o_id);
	}

	@GetMapping("/returnform/{o_id}")
	public after_return_form getreturnform(@PathVariable long o_id) {
		return accServ.getreturnform(o_id);
	}

}
