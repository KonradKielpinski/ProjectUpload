import React from 'react';
import ReactDOM from 'react-dom';
import AuthUser from '../Header-components/authUser.jsx';

class LogInButton extends React.Component {

    render() {
        return <button id='register' className="button1 grey" onClick={this.props.handler}>Register</button>
    }
}

export default LogInButton;