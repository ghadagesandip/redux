export const selectUser = (user) => {

    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const setUsers = (users) => {
  
    return {
        type:'SET_USERS',
        usersData: users
   }

};


