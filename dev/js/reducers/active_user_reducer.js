export default function (state = null , {type, payload}) {
    
    switch(type){
        
        case 'USER_SELECTED':
            return payload;
            break;
    }

    return state;


}