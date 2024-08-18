package com.ujjawalgupta29.leetcode_back_end.apis.problem;

import com.ujjawalgupta29.leetcode_back_end.mappers.ProblemMapper;
import com.ujjawalgupta29.leetcode_back_end.model.Problem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/problem")
public class ProblemApi {
    @Autowired
    private ProblemMapper problemMapper;
    @GetMapping("/getAllProblems")
    public List<Problem> getProblems() {
        return problemMapper.getAllProblems();
    }

    @GetMapping("/getProblem/{id}")
    public Problem getProblem(@PathVariable int id) {
        return problemMapper.getProblem(id);
    }
}
