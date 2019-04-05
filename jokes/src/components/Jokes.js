import React from 'react';
import axios from 'axios';

import Interceptor from './Interceptor';

class Jokes extends React.Component {
    state = {
        jokes: [],
    }

    componentDidMount() {
        axios
        .get('./jokes')
        .then(res => {
            this.setState({ jokes: res.data });
        })
    }

    render() {
        return (
            <div>
                <h3>Welcome to the Jokes List</h3>
                <ul>
                    {this.state.jokes.map(list => (
                        <li key={list.id}>{list.joke}</li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default Interceptor(Jokes);