import React from 'react';
import ReactDOM from 'react-dom';
import FooterInside from './footerInside.jsx';

class Footer extends React.Component {
    render(){
        return (
            <div className="main-footer">
                <FooterInside />
            </div>
        )
    }
}

export default Footer