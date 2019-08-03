import React,{Component} from 'react'
import {StyledHeader} from './StyledHeader'
import back from '../../assets/images/back.png'
import {withRouter} from 'react-router-dom';


class Header extends Component{

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
                <div className="fill"></div>
                <div className="head">
                    <p>
                        <img onClick={this.handleBackClick} alt="" src={`${back}`} />
                        {this.props.name}

                    </p>
                </div>
                
            </StyledHeader>
           
        )
    }
    handleBackClick(){
        this.props.history.go(-1)
    }
}


export default withRouter(Header)