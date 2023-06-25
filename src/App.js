import React from "react";
// TODO: answer here
import { Routes, Route } from 'react-router-dom';
import Student from './Routes/Student';
import AddStudent from './Routes/AddStudent';
import EditStudent from './Routes/EditStudent';
import Home from './Routes/Home';
import NotFound from './Routes/NotFound';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import "./style/stylee.css"



const App = () => {
    return (
        // TODO: replace this
        <>
        
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/:id" element={<EditStudent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
    </>
    );
};

export default App;
