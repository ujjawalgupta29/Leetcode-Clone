package com.ujjawalgupta29.leetcode_back_end.mappers;

import com.ujjawalgupta29.leetcode_back_end.model.Problem;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProblemMapper {
    List<Problem> getAllProblems();
    Problem getProblem(int id);
}
