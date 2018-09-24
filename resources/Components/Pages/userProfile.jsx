import React from 'react';
import ReactDOM from 'react-dom';
import MainContentUserProfile from '../Main-components/mainContentUserProfile.jsx';
import Header from '../Header-components/header.jsx';
import Footer from '../Footer-components/footer.jsx';
import NavBar from '../Nav-components/navbar.jsx';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        //bind function to handler context
        this.updateProps = this.updateProps.bind(this);

        this.state = {
            userId: null
        }
    }

        updateProps = (arg) => {
            this.setState({
                userId: arg
            }, () => {
                // console.log(this.state.userId)

            })
        }

    render() {
        return (
            <div className="page-content">
                <Header action={this.updateProps}/>
                <NavBar />
                <MainContentUserProfile idUser={this.state.userId}/>
                <Footer />
            </div>
        )
    }
}

export default UserProfile