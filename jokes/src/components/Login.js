import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    render() {
        return (
            <div>
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