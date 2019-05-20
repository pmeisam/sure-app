import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import HomeContent from '../../Components/HomeContent/HomeContent';
import Navbar from '../../Components/Navbar/Navbar';

class HomePage extends Component {
    render(){
        return(
            <>
                <Navbar />
                <Header/>
                <HomeContent />
            </>
        )
    }
}

export default HomePage;