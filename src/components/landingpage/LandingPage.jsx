import React from 'react'
import LoginPage from '../logincomponents/LoginPage'
import { putAccessToken, getUserLogged } from '../../utils/api';

class LandingPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authedUser : null,
        };

        this.onLoginSucceess = this.onLoginSucceess.bind(this);
    }

    async onLoginSucceess({ accessToken }){
        putAccessToken(accessToken);
        const { data } = await getUserLogged(); 
        this.setState({
            authedUser : data,
        });
    }

    render(){
        return (
            <div>
                <LoginPage loginSuccess={this.onLoginSucceess} />
            </div>
        )
    }
}

export default LandingPage
