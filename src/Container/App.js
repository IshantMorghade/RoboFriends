import React from 'react';
import {robots} from '../robot';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import { render } from '@testing-library/react';
import Scroll from '../Components/Scroll';
class App extends React.Component {
    
    constructor(){
        super()
        this.state={
         robots: [],
        searchfield:' '
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>{ return Response.json()})
        .then(users => { this.setState({robots:users})})
    }
    onSearchChange=(event) => {
        this.setState({searchfield:event.target.value})
    }

    render(){
        const {robots,searchfield} = this.state;
        const filterRobot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length?
            <h1>Loading</h1>:
            (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox SearchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filterRobot} />
            </Scroll>
            </div>
        );
    }
}
export default App;