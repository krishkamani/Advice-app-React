import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = {
        advice : ''
    };

    componentDidMount() {
        console.log("component did mount");
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        console.log("fetchAdvice call");
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;
            console.log(advice);
            this.setState({advice});
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        console.log("render call");
        const {advice} = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE</span>
                    </button>
                </div>
            </div>
            
        );
        
    }
}

export default App;