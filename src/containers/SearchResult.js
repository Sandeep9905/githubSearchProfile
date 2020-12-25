import React,{Component} from 'react';
import UserView from '../containers/UserView';
import Homepage from '../components/Homepage';

class SearchResult extends Component{
    constructor(props){
        super(props);
        this.state ={
            userData:props.userData
        }
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete(id){
        const userData = this.state.userData.filter(r=>r.id !== id);
        this.setState({userData}); 
    }
    render(){
        const{userData} =this.state;
        const listUserData = userData.length !==0 ? (
        userData.map((data )=>
            <li key={data.id}><UserView {...data} onDelete={this.onDelete}/></li>)
     ) :(
            <Homepage/>   
     );
     return(
        <div className="container" style={{display:'flex'}}>
               {listUserData}
        </div>
     )
    }
}

export default SearchResult;