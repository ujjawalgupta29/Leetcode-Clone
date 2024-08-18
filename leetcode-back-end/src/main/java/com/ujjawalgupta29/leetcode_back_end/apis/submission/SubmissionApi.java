package com.ujjawalgupta29.leetcode_back_end.apis.submission;

import com.ujjawalgupta29.leetcode_back_end.model.Submission;
import com.ujjawalgupta29.leetcode_back_end.service.CodeExecutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/submission")
public class SubmissionApi {

    @Autowired
    private CodeExecutionService codeExecutionService;
    @PostMapping("/submit")
    public ResponseEntity<String> submit(@RequestBody Submission submission) {
        String result = codeExecutionService.executeCode(submission.getCode());
        return  ResponseEntity.ok(result);
    }
}
