import React,{Component} from 'react';
import Counter from './count';

class Field extends Component{
    render(){
        return(
            <section className='Field'>
                <Counter number="0" />
                <Counter number="0" />
                <Counter number="0" />
                <Counter number="0" />
            </section>
        )
    }    
}

export default Field;