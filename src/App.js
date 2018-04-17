import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res=> {
                return res.json();
            })
            .then(uses => {
                this.setState({robots: uses})
            });
        
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })


        // console.log(filteredRobots );
    }



    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1 cl-3'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    } 
}

export default App;