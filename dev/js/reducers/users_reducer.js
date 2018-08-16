    export default function(state=[], {type, usersData}){
        switch(type){
            case  'SET_USERS':
                return usersData;
                break;
        }

    return state;
}