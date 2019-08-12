import React,{Component} from 'react'
import {StyledHeader} from './StyledHeader'
import back from '../../assets/images/back.png'
import {withRouter} from 'react-router-dom';


class HeaderToHome extends Component{

    constructor(props){
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this)
        this.state=({
            data: ""
        })
    }

    render(){
        return (
            <StyledHeader>
                <div className="head">
                    <p>
                        <img onClick={this.handleBackClick} alt="" src={`${back}`} />
                        {this.props.name}
                        <span onClick = {()=>{
                        this.props.history.push(this.props.to)
                      }}>{this.props.link}</span>
                    </p>
                </div>
            </StyledHeader>
        )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }
    handleBackClick(){
        this.props.history.push('/index/home')
    }
}


export default withRouter(HeaderToHome)