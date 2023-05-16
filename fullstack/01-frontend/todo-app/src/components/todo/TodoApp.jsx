import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';

import './TodoApp.css'
 
export default function TodoApp() {
    return (
        <>
            <div className="TodoApp">
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>
                    <Routes>
                        <Route path='/' element={<LoginComponent></LoginComponent>}/>
                        <Route path='/login' element={<LoginComponent></LoginComponent>}/>
                        <Route path='/welcome/:username' element={<WelcomeComponent></WelcomeComponent>}/>
                        <Route path='/todos' element={<ListTodosComponent/>}/>
                        <Route path='/logout' element={<LogoutComponent/>}/>
                        
                        <Route path='*' element={<ErrorComponent/>}/>
                        
                    </Routes>
                    {/* <FooterComponent></FooterComponent> */}
                </BrowserRouter>
            </div>
        </>
    )
}




