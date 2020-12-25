import React,{Component} from 'react';
import Moment from 'react-moment';
import Modal from 'react-modal';

class UserView extends Component{
     constructor(props){
        super(props);
        this.state={
            isOpen :false
        }
     }
    render(){
      const{ username , profile_Image ,url ,id ,onDelete , created_At,updated_At,repository} = this.props;
      const {isOpen}=this.state;
      return(
         <div className="container">
              <div className="card" style={{width:'100%'}}>
                    <img src={profile_Image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                       <h5 class="card-title">{username}</h5>
                        <div class="alert alert-danger" role="alert">
                           <a href={url}>{url}</a>
                           <p>Public Repository : {repository}</p>
                        </div>
                       
                       <p class="card-text">This is is the github prfile of {username} and she/he has developed {repository} repository in her/his GitHub account.</p>
                       <a href="#" class="btn btn-danger" onClick={()=>{
                                                                   onDelete(id);
                                                                   this.setState({isOpen:true})
                                                                          }}>Delete</a>
                    </div>
                    <div class="card-footer">
                       <small class="text-muted">Created At :
                       <Moment className="text-muted" format="Do MM YYYY">
                            {created_At}
                       </Moment>
                          </small><br/>
                       <small class="text-muted">Last updated :
                       <Moment className="text-muted" format="Do MM YYYY">
                            {updated_At}
                       </Moment>
                       </small>
                    </div>
               </div>
   
   
   <Modal isOpen={isOpen} >
   <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-body">
           <p>User Deleted</p>
         </div>
         <div className="modal-footer">
           <button type="button" onClick={this.setState({isOpen:false})} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         </div>
       </div>
     </div>
   </div>
   </Modal>
         </div>
      )
    }
}
export default UserView;