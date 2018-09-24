import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/" className="button2 blue">HOME</Link>
                {/* <Link to="/aboutus" className="button2 red">ABOUT</Link> */}
                <Link to="/games" className="button2 orange">GAMES</Link>
            </div>
        )
    }
}

export default NavBar;