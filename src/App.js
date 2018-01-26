import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            seriesList: [],
            seriesEpisodesList: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value.toLowerCase()});

        fetch('seriesList.json',{})
            .then(response => response.json())
            .then(seriesListDepuisFichier => {
                this.setState({seriesList: seriesListDepuisFichier});

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // alert("j'ai fait ce que j'ai pu");
            });

    }
    componentDidMount() {
    }

        render() {
        return (
            <div>
                <ul>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    {this.state.seriesList.length ?
                        this.state.seriesList.map(item => <li key={item.id}>{item.seriesName}</li>)
                        : <li>Loading...</li>
                    }
                    <p>{this.state.value} </p>

                </ul>
            </div>
        )
    }
}


export default App;
