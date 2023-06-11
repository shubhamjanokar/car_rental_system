package com.app.demo.service;

import java.util.List;

import com.app.demo.pojos.AccountDetails;
import com.app.demo.pojos.Car_Details;
import com.app.demo.pojos.Customer_pickup;
import com.app.demo.pojos.Driver_Details;
import com.app.demo.pojos.Location_Details;
import com.app.demo.pojos.OrderUpdate;
import com.app.demo.pojos.Orders_Details;
import com.app.demo.pojos.Query_details;
import com.app.demo.pojos.after_return_form;
import com.app.demo.pojos.feedback_form;
import com.app.demo.pojos.payment_details;

public interface AccountDetailsService {

	String addAccDetails(AccountDetails accDetails);

	List<AccountDetails> getAllAccountDetails();

	AccountDetails authenticateUser(String username, String pass);

	String addQueryDetails(Query_details qryDetails);

	List<Query_details> getAllQueryDetails();

	String feedback(feedback_form ff);

	String deleteQuery_Details(long q);

	String addLocation_Details(Location_Details l);

	List<Location_Details> getAllLocation_Details();

	String deleteLocation_Details(int k);

	List<Customer_pickup> getdetailsoforder();

	Customer_pickup addorderinpickup(Customer_pickup cp1);

	List<Orders_Details> allorderdetails();

	String updatefeedback(feedback_form f2);

	String updatepayment(payment_details p2);

	String updateafterreturn(after_return_form a2);

	List<feedback_form> updateforms();

	List<after_return_form> showforms();

	List<payment_details> showpdetails();

	AccountDetails loadUserByUsername(String username);

	OrderUpdate onupdate(String username, String password, long o_id, int car_model, String license_no);

	Car_Details findCar(int carmodel);

	Driver_Details finddriver(String lic);

	payment_details getpayment(long o_id);

	List<Orders_Details> getallorders(long o_id);

	feedback_form getfeedback(long o_id);

	after_return_form getreturnform(long o_id);

}
