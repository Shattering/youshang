
import React from 'react'
import StyledFindItem from './StyledFindItem'
export default (props) => {
    // console.log(props.toSubscribe)
        return (
            <StyledFindItem>
                <div id="scroll-wrap-find" >
                    <div > 
                   {props.list&&props.toSubscribe ? props.list.map( item =>(                                                                                             
                       <div key={item.oid} className="find-item-wrap"  onClick={props.toSubscribe.bind(this, item.oid)}>
                            <p>{item.content} </p>
                            <ul>
                                <li className="item-left">{item.data} {item.starttime}</li>
                                <li className="item-right"><i>￥{item.price}</i>&nbsp;&nbsp;&gt;</li>
                            </ul>
                            <ul>
                                <li className="item-left name" > <img src="images/touxaing.png" alt=""></img>{item.studentname}</li>
                                <li className="item-right km"> {item.range}</li>
                            </ul>
                        </div>
                     ) ): ''}
                    </div>
                </div>
            </StyledFindItem>
        )
}

