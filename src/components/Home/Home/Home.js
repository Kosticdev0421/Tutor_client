import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import Features from '../Features/Features';
import Header from '../Header/Header';
import NotesDisplay from '../NotesDisplay/NotesDisplay';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <Nav />
            <Header />
            <Features />
            <NotesDisplay />
            <Courses />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;