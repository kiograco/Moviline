import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from '../Pags/Home';
import Series from '../Pags/Series';
import Movies from '../Pags/Movies/Movies';
import { Nav,A, Body, Bounce, Logo } from "./style";

export const Routers = () => {
    return (
        <Body>
            <BrowserRouter>
                <Nav className="menu-bar"> 
                <Bounce><Logo>Moviline</Logo></Bounce>
                    <A to='/'>Home</A>
                    <A to='/series'>Top Series</A>
                    <A to='/movies'>Top Movies</A>
                </Nav>
                
                <Routes>
                    <Route path="/" element={<Home />} exact> </Route>
                    <Route path="/series" element={<Series />} exact> </Route>
                    <Route path="/movies" element={<Movies />}> </Route>
                </Routes>
            </ BrowserRouter>
        </Body>
    );
};