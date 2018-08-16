import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {    

    render(){
        if(!this.props.user){
            return (<div> please select user</div>)
        }
        return (
            <div> 
                <div> Id : {this.props.user.id}</div>
                <div> Name: {this.props.user.name}</div>
                <div> Address: {this.props.user.address.street}, {this.props.user.address.city}</div>
                <div> Company: {this.props.user.company.name}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {    
        user : state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);