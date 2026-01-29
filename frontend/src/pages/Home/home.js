import './home.css';
import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

export default function Home () {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content">
                <h1>Welcome to Kamala Foods</h1>
                <p>Your one-stop shop for fresh and delicious food products.</p>
            </div>
            <Footer />
        </div>
    )
}