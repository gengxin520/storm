package com.bob.storm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class JindianController {

	@RequestMapping("/jindian")
	public String helloworld() {
		return "/view/jindian_menu.html";
	}

}