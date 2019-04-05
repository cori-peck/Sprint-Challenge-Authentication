import React from 'react';

class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
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