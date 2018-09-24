import React from 'react';
import ReactDOM from 'react-dom';
import UploadButton from '../Buttons/uploadButton.jsx'

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            userId: null,
            imageUrl: ''
        }
    }

    getTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    getDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    getUrl = (e) => {
        this.setState({
            imageUrl: e.target.value
        })
    }

    componentWillReceiveProps (nextProps) {
        console.log('Id z upload', nextProps.userId);
        this.setState({
            userId: nextProps.userId
        })

    }

    render() {
        return (
            <div className="upload-form">
                <input type="text" id="fileTitle" onChange={this.getTitle} placeholder="Write a title"/>
                <input type="text" id="fileDescription"  onChange={this.getDescription} placeholder="Write a description"/>
                <input type="text" id="fileImage" onChange={this.getUrl} placeholder="Paste URL"/>
                <UploadButton title={this.state.title} description={this.state.description} userId={this.state.userId} imageUrl={this.state.imageUrl}/>
            </div>
        )
    }
}

export default UploadForm
