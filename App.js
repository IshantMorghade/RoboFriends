import {robots} from './robot';
import SearchBox from './SearchBox';
import CardList from './CardList';

const App = () =>{
    return(
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox/>
            <CardList robots={robots} />
        </div>
    );
}
export default App;