import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, setUsers } from '../actions/user-actions';
import  Api from './../api/index';


class UserList extends Component{

    constructor(props){

        super(props);
        this.state = {
            
        };
    }


    componentDidMount(){

        Api.get('users')
        .then(res => {
            this.props.setUsers(res.data);    
        })
    }


    getUserListItems(){

        return this.props.users.map((user) => {

            return (
                <li  
                    key={user.id}
                    onClick = { () => this.props.selectUser(user) }
                >
                {user.name} 
                </li>
                
            )
        })
    }


    render() {

        return (
            <ul>
                {this.getUserListItems()}
            </ul>
        )
    }
}


function mapStateToProps(state){

    return {
        users: state.users

    }
}


function mapDispatchToProps(dispatch) {

    return bindActionCreators({selectUser, setUsers}, dispatch);  
    
}

export default connect(mapStateToProps, mapDispatchToProps)( UserList );