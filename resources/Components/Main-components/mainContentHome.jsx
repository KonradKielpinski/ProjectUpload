import React from 'react';
import ReactDOM from 'react-dom';

class MainContentHome extends React.Component {
    render() {
        return (
            <div className="main-content-home">
                    <p>
                        Welcome to Game Uploader, you can upload your creations to our storage and share them on the games page.

                        <ul>
                            <li>Register a user account</li>
                            <li>Click profile button</li>
                            <li>Type required information, provide an image URL and select your file</li>
                            <li>Upload your file</li>
                            <li>Your files will be visible in the games section</li>
                        </ul>
                    </p>
            </div>
        )
    }
}

export default MainContentHome;


