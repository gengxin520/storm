package com.bob.storm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StormApplication {

	protected final static Logger LOGGER = LoggerFactory.getLogger(StormApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(StormApplication.class, args);
		LOGGER.info("Storm startup success!");
	}

}
