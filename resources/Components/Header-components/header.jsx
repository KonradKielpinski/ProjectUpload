import React from 'react';
import ReactDOM from 'react-dom';
import AuthUser from '../Header-components/authUser.jsx';

class Header extends React.Component {
    render(){
        return (
            <div className="header-box">
                    <img id="LogoImg" src={require('../../images/Logo.png')}></img>
                    <AuthUser action={this.props.action}/>
            </div>
        )
    }
}

export default Header