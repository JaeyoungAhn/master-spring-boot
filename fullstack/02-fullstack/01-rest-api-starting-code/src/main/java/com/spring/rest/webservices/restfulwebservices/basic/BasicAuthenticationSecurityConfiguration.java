package com.spring.rest.webservices.restfulwebservices.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class BasicAuthenticationSecurityConfiguration {
    //Filter chain
    // authenticate all requests
    // basic authentication
    //disabling csrf
    // not having a session is best practice to disable csrf
    // stateless rest api
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http.authorizeHttpRequests(
//                auth -> auth.anyRequest().authenticated()
//        );
//
//        http.httpBasic(Customizer.withDefaults());
//
//        http.sessionManagement(
//                session -> session.sessionCreationPolicy
//                        (SessionCreationPolicy.STATELESS));
//
//        http.csrf().disable();
//

        http
            .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
            .httpBasic(Customizer.withDefaults())
            .sessionManagement(
                session -> session.sessionCreationPolicy
                (SessionCreationPolicy.STATELESS))
            .csrf().disable();

        return http.build();
    }

}
