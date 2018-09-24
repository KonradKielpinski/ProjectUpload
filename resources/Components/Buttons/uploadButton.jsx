import React from 'react';
import ReactDOM from 'react-dom';
import UploadForm from '../Main-components/uploadForm.jsx';

class UploadButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            file: null
        }
    }

    // sendData = () => {

    //     const firebaseRef = firebase.database();

    //     firebaseRef.ref("Text").set("Some Value123");
    // }

    selectFile = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    sendFiles = () => {
        // Storage reference

        let storageRef = firebase.storage().ref('games/' + this.state.file.name);
        let database = firebase.database()

        // Upload

        let task = storageRef.put(this.state.file);

        //real time listener

        task.on('state_changed', function(snapshot){
        }, error => {
            //unsuccessful uploads
            console.log(error);
        }, () => { 
            //successful uploads
            let getURL = storageRef.getDownloadURL().then( url => {
                return url
              })
              //database
            .then((getURL) => {
            let userLogged = firebase.auth().currentUser;
            let postKey = database.ref('Posts').push().key;
            let updates = {};
            let postData = {
                url: getURL,
                title: this.props.title,
                description: this.props.description,
                user: this.props.userId,
                name: userLogged.displayName,
                imageUrl: this.props.imageUrl
            }
            updates['/Posts/' + postKey] = postData;
            return firebase.database().ref().update(updates);   
            })
            .then(() => {

            })
        })
    }

    render() {
        return (
            <div className="send-files">
                <button onClick={this.sendFiles} className="button1 red">Send files</button>
                <input type="file" id="inputFile" onChange={this.selectFile} />
            </div>
        )
    }
}

export default UploadButton;