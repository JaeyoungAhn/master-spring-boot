package com.spring.rest.webservices.restfulwebservices.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpRequest;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AnyRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

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
        //1: Response to preflight request doesn't pass access control check
        //2: basic auth(URL) at the time of login whether the token is valid or not.

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

        http.authorizeHttpRequests(auth ->
                    auth.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                            .anyRequest().authenticated())
            .httpBasic(Customizer.withDefaults())
            .sessionManagement(
                session -> session.sessionCreationPolicy
                (SessionCreationPolicy.STATELESS))
            .csrf().disable();

        return http.build();
    }

}
