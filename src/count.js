import React, {Component} from 'react';


class Counter extends Component{
    constructor(props){
        super(props);

        this.state ={
            count: 0
        }

        this.addnum = this.addnum.bind(this);
    }

    addnum(){
        
        this.setState({
            count: +this.state.count + 1
        })
    }

    render(){
        let res = this.state.count;

        return(
            <div className='counter' onClick={this.addnum}>{res}</div>
        )
    }
}

export default Counter;
