package com.bob.storm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class XiaochiController {

	@RequestMapping("/xiaochi")
	public String helloworld() {
		return "/view/xiaochi_menu.html";
	}

}