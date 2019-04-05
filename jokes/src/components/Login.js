import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleInputChange = e => {
        const {name , value } = e.target;

        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:3300/api/login';

        axios
        .post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/jokes');
        })
        .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <h3>Log In</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username" />
                        <input
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            placeholder="username"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" />
                        <input 
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="password"
                            type="password"
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Login;