package com.popol.backend.main;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/main")
@RequiredArgsConstructor
public class MainController {
    
    @GetMapping("pol")
    public void pol() {
        System.out.println("hdhd");
    }
}
