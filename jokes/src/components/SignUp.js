import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleInputChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:3300/api/register';

        axios
            .post(endpoint, this.state)
            .then(res => {
                this.props.history.push('/login');
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <form>
                    <div>
                        <label htmlFor="username" />
                        <input
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            placeholder="create a username"
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
                            placeholder="choose a password"
                            type="password"
                        />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;