package com.app.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.demo.exception.ResourceNotFoundException;
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
import com.app.demo.repo.AccountDetailsRepo;
import com.app.demo.repo.Car_DetailsRepo;
import com.app.demo.repo.Customer_pickupRepo;
import com.app.demo.repo.Driver_DetailsRepo;
import com.app.demo.repo.Location_DetailsRepo;
import com.app.demo.repo.Orders_DetailsRepo;
import com.app.demo.repo.Query_DetailsRepo;
import com.app.demo.repo.after_return_formRepo;
import com.app.demo.repo.feedback_formRepo;
import com.app.demo.repo.payment_detailsRepo;

@Service
@Transactional
public class AccountDetailsServiceImpl implements AccountDetailsService {

	@Autowired
	private AccountDetailsRepo AccDetRepo;
	@Autowired
	private Query_DetailsRepo qryDetailsRepo;

	@Autowired
	private Location_DetailsRepo lr1;

	@Autowired
	private feedback_formRepo ffRepo;

	@Autowired
	private Customer_pickupRepo pprepo;
	@Autowired
	private Orders_DetailsRepo otrepo;
	@Autowired
	private Car_DetailsRepo cd;

	@Autowired
	private Driver_DetailsRepo ddRepo;

	@Autowired
	private payment_detailsRepo p1;
	@Autowired
	private after_return_formRepo a1;
	@Autowired
	private feedback_formRepo f1;

	@Override
	public List<AccountDetails> getAllAccountDetails() {

		return this.AccDetRepo.findAll();
	}

	@Override
	public String addAccDetails(AccountDetails accDetails) {
		AccountDetails parsistAccDetails = AccDetRepo.save(accDetails);
		return "user registered with Adhar " + parsistAccDetails.getAdhar_no();
	}

	@Override
	public AccountDetails authenticateUser(String username, String pass) {
		AccountDetails user = AccDetRepo.findByUsernameAndPassword(username, pass)
				.orElseThrow(() -> new ResourceNotFoundException("invalid user"));
		return user;
	}

	@Override
	public String addQueryDetails(Query_details qryDetails) {
		Query_details persistqryDetails = qryDetailsRepo.save(qryDetails);

		return "Query added " + persistqryDetails.getQ_id();
	}

	@Override
	public List<Query_details> getAllQueryDetails() {

		return qryDetailsRepo.findAll();
	}

	@Override
	public String feedback(feedback_form ff) {
		feedback_form newff = ffRepo.save(ff);
		return "feedback save successfullly " + newff.getO_id();
	}

	@Override
	public String deleteQuery_Details(long q) {
		Query_details q1 = qryDetailsRepo.findById(q)
				.orElseThrow(() -> new ResourceNotFoundException("query not found"));
		qryDetailsRepo.delete(q1);
		return "query delete";
	}

	@Override
	public String addLocation_Details(Location_Details d1) {
		Location_Details persistlocdetails = lr1.save(d1);
		return "location added" + persistlocdetails.getPincode();

	}

	@Override
	public List<Location_Details> getAllLocation_Details() {

		return this.lr1.findAll();
	}

	@Override
	public String deleteLocation_Details(int k) {
		Location_Details lr2 = lr1.findById(k).orElseThrow(() -> new ResourceNotFoundException("location not found"));
		lr1.delete(lr2);
		return "location delete";

	}

	@Override
	public List<Customer_pickup> getdetailsoforder() {

		return pprepo.findAll();
	}

	@Override
	public Customer_pickup addorderinpickup(Customer_pickup cp1) {
		Customer_pickup cs1 = pprepo.save(cp1);
		return cs1;
	}

	private void createorder(Customer_pickup cp2, Car_Details cr1, Driver_Details d1, AccountDetails us1) {
		Orders_Details or1 = new Orders_Details();
		double amount = 0;
		if (d1 != null) {
			@SuppressWarnings("deprecation")
			int diff = Math.abs(cp2.getR_date().getDay() - cp2.getP_date().getDay());
			amount = (cr1.getCar_rent_per_day() * diff) + (diff * 300);
			d1.addorders(or1);
		} else {
			@SuppressWarnings("deprecation")
			int diff = Math.abs(cp2.getR_date().getDay() - cp2.getP_date().getDay());
			amount = (cr1.getCar_rent_per_day() * diff);
		}
		cp2.addorders(or1);
		cr1.addorders(or1);

		us1.addorderin(or1);
		payment_details p1 = new payment_details();
		after_return_form a1 = new after_return_form();
		feedback_form f1 = new feedback_form();

		p1.setTotal_amount(amount);
		or1.addorderinpdetails(p1);
		or1.addorderinfdetails(f1);
		or1.addorderinadetails(a1);
		System.out.println("Added Order With order Id " + cp2.getO_id() + "Payment created with " + p1.getO_id());
	}

	@Override
	public List<Orders_Details> allorderdetails() {
		Orders_Details or2 = otrepo.findById(2L).orElseThrow();
		System.out.println("Driver Details" + or2.getDr1());
		System.out.println("Car Details" + or2.getCar1());
		return otrepo.findAll();
	}

	@Override
	public OrderUpdate onupdate(String username, String password, long o_id, int car_model, String license_no) {

		Driver_Details d1 = null;
		AccountDetails ac1 = AccDetRepo.findByUsernameAndPassword(username, password).orElseThrow();
		Car_Details cr1 = cd.findById(car_model).orElseThrow();
		Customer_pickup or1 = pprepo.findById(o_id).orElseThrow();
		if (license_no != null) {
			d1 = ddRepo.findById(license_no).orElseThrow();
		}

		createorder(or1, cr1, d1, ac1);
		if (d1 != null)
			return new OrderUpdate(ac1.getAdhar_no(), or1.getO_id(), cr1.getCar_model(), d1.getLicense_no());
		else
			return new OrderUpdate(ac1.getAdhar_no(), or1.getO_id(), cr1.getCar_model());
	}

	@Override
	public String updatefeedback(feedback_form f2) {
		feedback_form f3 = f1.findById(f2.getO_id()).orElseThrow();
		f3.setCleaning_points(f2.getCleaning_points());
		f3.setComments(f2.getComments());
		f3.setService_points(f2.getService_points());
		f1.save(f3);
		return "Feedback Updated for id " + f2.getO_id();
	}

	@Override
	public String updatepayment(payment_details p2) {
		payment_details p3 = p1.findById(p2.getO_id()).orElseThrow();

		if (p2.getCards() != null) {
			p3.setCards(p2.getCards());
		} else if (p2.getUpi() != null) {
			p3.setUpi(p2.getUpi());
		} else {

			p3.setCash(p2.isCash());
		}
		p1.save(p3);
		return "Payment Updated for " + p2.getO_id();
	}

	@Override
	public String updateafterreturn(after_return_form a2) {
		after_return_form a3 = a1.findById(a2.getO_id()).orElseThrow();
		a3.setComments(a2.getComments());
		a3.setCondition_after_return(a2.getCondition_after_return());
		a1.save(a3);
		return "After Return Form Updated " + a2.getO_id();
	}

	@Override
	public List<feedback_form> updateforms() {

		return f1.findAll();
	}

	@Override
	public List<after_return_form> showforms() {
		return a1.findAll();
	}

	@Override
	public List<payment_details> showpdetails() {
		return p1.findAll();
	}

	@Override
	public AccountDetails loadUserByUsername(String username) {
		AccountDetails us1 = AccDetRepo.findByUsername(username);
		return us1;
	}

	@Override
	public Car_Details findCar(int carmodel) {
		Car_Details c1 = cd.findById(carmodel).orElseThrow();
		return c1;
	}

	@Override
	public Driver_Details finddriver(String lic) {
		Driver_Details d1 = ddRepo.findById(lic).orElseThrow();
		return d1;
	}

	@Override
	public payment_details getpayment(long o_id) {
		payment_details pp1 = p1.findById(o_id).orElseThrow();
		return pp1;
	}

	@Override
	public List<Orders_Details> getallorders(long o_id) {
		List<Orders_Details> list = otrepo.findallorders(o_id);
		return list;
	}

	@Override
	public feedback_form getfeedback(long o_id) {
		feedback_form f1 = ffRepo.findById(o_id).orElseThrow();
		return f1;
	}

	@Override
	public after_return_form getreturnform(long o_id) {
		after_return_form a2 = a1.findById(o_id).orElseThrow();
		return a2;
	}

}
