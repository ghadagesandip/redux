import React, {Component} from 'react';

const style =  {
    color: 'red'
}

export default (WrappedComponent) => {

    return class HOC extends Component {
        
        constructor(props) {

            super(props);
            console.log('props', props)
        }

        render(){
            
            return this.props.colored === true ? <div style={style}> <WrappedComponent /> </div> : <WrappedComponent />
        
        }
    }    
}
