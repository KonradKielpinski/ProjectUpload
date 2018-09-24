import React from 'react';
import ReactDOM from 'react-dom';
import LogInButton from '../Buttons/logInButton.jsx';
import RegisterButton from '../Buttons/registerButton.jsx';
import LogOutButton from '../Buttons/logOutButton.jsx';
import { Link } from 'react-router-dom';

class AuthUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isFireBaseUser: null,
            userId: null,
            username: '',
        }
    }

    getMail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    getPass = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    getUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    loginUser = () => {
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
        promise.catch(e => console.log(e.message));
    }

    registerUser = () => {
        let database = firebase.database()
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
        promise.catch(e => console.log(e.message));

        promise.then(() => {
            // send to database
            let user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: this.state.username,
              }).then(function() {
                // Update successful.
                console.log('Update success', user)
              }).catch(function(error) {
                // An error happened.
              });
        }).then(() => {
            let user = firebase.auth().currentUser;
            let userKey = database.ref('Users').push().key;
            let updates = {};
            let userData = {
                name: this.state.username,
                email: user.email,
                user: user.uid
            }
            updates['/Users/' + userKey] = userData;
            return firebase.database().ref().update(updates);
        })
        console.log('registered')
    }

    logOutUser = () => {
        const auth = firebase.auth();
        auth.signOut();
    }

    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(isFireBaseUser => {
            if(isFireBaseUser) {
                console.log('logged in');
                this.setState({
                    isFireBaseUser
                })
            } else {
                console.log('not logged in');
                this.setState({
                    isFireBaseUser: null
                })  
            }

            let user = firebase.auth().currentUser;
            // console.log(user)

            if (user) {
                this.setState({
                    userId: user.uid
                    
                }, () => {
                    console.log('aaaa', this.state)
                    if(typeof this.props.action == 'function'){
                        this.props.action(this.state.userId)
                    }
                })
            }
            
            // console.log(this.state.userId)
        });
    }

    render() {
        return (
            <div className="auth-user">
                <form id="authForm">
                    <input id="txtEmail" type="email" placeholder="Email" value={this.state.email} onChange={this.getMail}/>
                    <input id="txtPassword" type="password" placeholder="Password" value={this.state.password} onChange={this.getPass}/>
                    <input id="txtUsername" type="username" placeholder="Username" value={this.state.username} onChange={this.getUsername}/>
                </form>
                <LogInButton handler={this.loginUser} />
                <RegisterButton handler={this.registerUser}/>
                <LogOutButton isFireBaseUser={this.state.isFireBaseUser} handler={this.logOutUser} />
                {this.state.isFireBaseUser && <Link to="/userProfile" id="profile" className="button2 darkgrey">Profile</Link>}
            </div>
        )
    }
}

export default AuthUser;

// manageLogin = (loginstate) => {
//     this.setState({
//         loggedin: loginstate,
//         currentUser: firebase.auth().currentUser
//     }, () => {
//         this.getUserData()
//     })
// }