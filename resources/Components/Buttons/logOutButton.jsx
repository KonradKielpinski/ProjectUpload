import React from 'react';
import ReactDOM from 'react-dom';
import AuthUser from '../Header-components/authUser.jsx';


class LogOutButton extends React.Component {
    render() {
        if (this.props.isFireBaseUser) {
            return <button id='logout' className="button1 darkgrey" onClick={this.props.handler} >Log-out</button>
        } else {
            return null
        }
    }
}

export default LogOutButton;