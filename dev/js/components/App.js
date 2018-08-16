import React from 'react'

require('../../scss/style.scss');
import UserList from '../containers/user_list';
import UserDetail from '../containers/user_details';
const App = () => (
    <div>
        <h2>User list : </h2>
        <UserList />
        <hr />
        <h2>User default</h2>
        <UserDetail /> 
    </div>
);

export default App;