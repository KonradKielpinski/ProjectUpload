import React from 'react';
import ReactDOM from 'react-dom';
import UploadForm from '../Main-components/uploadForm.jsx';

class MainContentUserProfile extends React.Component {

    render() {

        return (
            <div className="main-content">
               <UploadForm userId={this.props.idUser}/>
            </div>
        )
    }
}

export default MainContentUserProfile


