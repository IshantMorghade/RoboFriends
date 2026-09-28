import React from 'react';
import {robots} from './robot';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { render } from '@testing-library/react';
class App extends React.Component {
    
    constructor(){
        super()
        this.state={
         robots: robots,
        searchfield:' '
        }
    }
    onSearchChange=(event) => {
        this.setState({searchfield:event.target.value})
    }

    render(){
        const filterRobot = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox SearchChange={this.onSearchChange}/>
            <CardList robots={filterRobot} />
        </div>
    );
    }
}
export default App;