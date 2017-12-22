package com.bob.storm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HobbyController {

	@RequestMapping("/hobby")
	public String helloworld() {
		return "/view/hobby.html";
	}

}