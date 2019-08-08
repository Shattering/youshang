import React,{Component} from 'react'
import { BorderedInput } from './StyledInput'


class Input extends Component {

    render(){
        return(
            <BorderedInput
            placeholder={this.props.placeholder}
            type={this.props.type}
            />
        )
    }
}

export default Input
