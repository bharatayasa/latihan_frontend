import React from 'react'
import { Route, Routes } from 'react-router-dom'

// user page

// admin page

// landing page

// api
import { getUserLogged, putAccessToken } from "../utils/api.js";


class Router extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            authedUser : null, 
            initializing: true,
        }
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount(){
        try {
            const {data} = await getUserLogged();
            this.setState({
                authedUser: data,
                initializing: false,
            })
        }catch (error) {
            this.setState({
                initializing: false,
            })
        }
    }

    onLogout() {
        this.setState({
            authedUser: null,
        });
        putAccessToken('');
    }

    render(){
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
                <Routes>
                    <Route path="/*" element={<LandingPage />} />
                </Routes>
            );
        }
        
        const isAdmin = this.state.authedUser.role === 'admin';

        if (isAdmin) {
            return (
                <div>
                    <header>
                        <NavbarAdmin logout={this.onLogout} name={this.state.authedUser.name} />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<UsersData />} />
                        </Routes>
                    </main>
                </div>
            );
        }else{
            return(
                <div>
                    <header>
                        <NavbarUsers logout={this.onLogout} username={this.state.authedUser.username} />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />}/>
                        </Routes>
                    </main>
                    <FooterComponent />
                </div>
            )
        }
    }
}

export default Router
