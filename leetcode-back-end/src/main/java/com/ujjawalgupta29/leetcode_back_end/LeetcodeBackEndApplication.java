package com.ujjawalgupta29.leetcode_back_end;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.ujjawalgupta29.leetcode_back_end.mappers")
public class LeetcodeBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(LeetcodeBackEndApplication.class, args);
	}

}
