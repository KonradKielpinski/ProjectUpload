import React from 'react';
import ReactDOM from 'react-dom';
import MainContentGames from '../Main-components/mainContentGames.jsx';
import Header from '../Header-components/header.jsx';
import Footer from '../Footer-components/footer.jsx';
import NavBar from '../Nav-components/navbar.jsx';

class GamesPage extends React.Component {
    render() {
        return (
            <div className="page-content">
                <Header />
                <NavBar />
                <MainContentGames />
                <Footer />
            </div>
        )
    }
}

export default GamesPage;