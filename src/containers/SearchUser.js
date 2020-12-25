import React,{Component} from 'react';
import {fetchApi } from '../services/api';
import {StoreData} from '../services/api';
import SearchResult from '../containers/SearchResult';


class SearchUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            search:""
        };
    }
    componentDidMount(){
       
    }
     handleSearch = e =>{
         e.preventDefault();
         fetchApi(this.state.search)
         this.setState({search:''});
    }
    render(){
        return(
            <div className="container" style={{marginTop:'30px'}}>
            <div className="search">
                <form className="d-flex" onSubmit={this.handleSearch}>
                   <input
                     type="search" 
                     className="form-control" 
                     value={this.state.search} 
                     placeholder="Search"
                     aria-label="Search"
                     onChange={e => this.setState({search:e.target.value})}
                     />
                </form>
            </div>
            <SearchResult userData ={StoreData} />
          </div>  
        )
    }
}


export default SearchUser;