package com.app.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.demo.pojos.AccountDetails;
import com.app.demo.pojos.Car_Details;
import com.app.demo.pojos.Driver_Details;
import com.app.demo.pojos.feedback_form;
import com.app.demo.repo.AccountDetailsRepo;
import com.app.demo.repo.Car_DetailsRepo;
import com.app.demo.repo.Driver_DetailsRepo;
import com.app.demo.repo.feedback_formRepo;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private Car_DetailsRepo cd;

	@Autowired
	private Driver_DetailsRepo ddRepo;

	@Autowired
	private feedback_formRepo ffRepo;
	@Autowired
	private AccountDetailsRepo adrepo;

	@Override
	public String addCar(Car_Details car) {
		Car_Details saveCar = cd.save(car);
		return "Car add successfully" + saveCar.getCar_model();
	}

	@Override
	public List<Car_Details> getAllCars() {
		return cd.findAll();
	}

	@Override
	public String addDriver(Driver_Details dd) {
		Driver_Details newDD = ddRepo.save(dd);
		return "Driver add sucessfully" + newDD.getLicense_no();
	}

	@Override
	public List<Driver_Details> getAllDriver() {

		return ddRepo.findAll();
	}

	@Override
	public List<feedback_form> getAllFeedback() {

		return ffRepo.findAll();
	}

	@Override
	public String deleteAccountDetails(long lno) {
		AccountDetails ud = adrepo.findById(lno).orElseThrow();
		adrepo.delete(ud);
		return "user delete sucessfully";
	}

	@Override
	public String deleteDriver_Details(String lno) {
		Driver_Details dd = ddRepo.findById(lno).orElseThrow();
		ddRepo.delete(dd);
		return "driver delete sucessfully";
	}

	@Override
	public String deleteCar(int dc) {
		Car_Details cdd = cd.findById(dc).orElseThrow();
		cd.delete(cdd);
		return "car delete sucessfully";
	}

}
