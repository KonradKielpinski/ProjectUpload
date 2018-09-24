import React from 'react';
import ReactDOM from 'react-dom';
import MainContentHome from '../Main-components/mainContentHome.jsx';
import Header from '../Header-components/header.jsx';
import Footer from '../Footer-components/footer.jsx';
import NavBar from '../Nav-components/navbar.jsx';

class HomePage extends React.Component {
    render() {
        return (
            <div className="page-content">
                <Header />
                <NavBar />
                <MainContentHome />
                <Footer />
            </div>
        )
    }
}

export default HomePage;