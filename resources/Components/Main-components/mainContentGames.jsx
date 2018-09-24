import React from 'react';
import ReactDOM from 'react-dom';
// import UploadButton from '../Buttons/uploadButton.jsx'

class MainContentGames extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: '',
            objectData: null
        }
    }

    componentDidMount() {
        let userData;
        fetch(`https://uploader-b8355.firebaseio.com/Posts.json`)
            .then((response) => response.json())
            .then((response) => {
                userData = response;
                console.log('updating all data', response)
                this.setState({
                    data: userData
                })
                console.log(this.state)
                // Object.values(this.state.data).map((data, i) => 
                //         <li key={i}> {data.category} </li>
                // )
                let dataObject = Object.values(this.state.data);
                // let objectValues = Object.values(this.state.data);
                console.log('Values', dataObject)
                // for (var key in this.state.data) {
                //     dataUrls.push(this.state.data[key].objectValues)
                //     // dataUrls.push(this.state.data[key].title)
                // }
                this.setState({
                    objectData: dataObject
                })
                console.log('last', this.state)
            })
    }

    render() {
        return (
            <div className="main-content">
               {this.state.objectData != null && this.state.objectData.map(e => {
                       return (
                        <div className="display-files">
                            <img id="fileInfoImg" src={e.imageUrl}/>
                            <span id="fileInfoTitle">{e.title}</span>
                            <span id="fileInfoDescription">{e.description}</span>
                            <span id="fileInfoUsername">Created by {e.name}</span>
                            <span id="fileInfoFileURL"><a href={e.url} className="button2 grey">Download</a></span>
                        </div>
                    )
                   })}
            </div>
        )
    }
}

export default MainContentGames