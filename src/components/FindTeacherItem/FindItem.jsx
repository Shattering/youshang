
import React from 'react'
import BScroll from 'better-scroll'
import StyledFindItem from './StyledFindItem'
class FindItem extends React.Component {
    render() {
        return (
            <StyledFindItem>
                <div id="scroll-wrap-find">
                    <div>
                        <div className="find-item-wrap" >
                            <p> 英语、语文 </p>
                            <ul>
                                <li className="item-left">7月16日 15：30-16：00</li>
                                <li className="item-right"><i>￥145</i>&nbsp;&nbsp;&gt;</li>
                            </ul>
                            <ul>
                                <li className="item-left name" > <img src="/images/touxaing.png" alt=""></img>徐小明</li>
                                <li className="item-right km"> 1.5km</li>
                            </ul>
                        </div>
                        <div className="find-item-wrap" >
                            <p> 英语、语文 </p>
                            <ul>
                                <li className="item-left">7月16日 15：30-16：00</li>
                                <li className="item-right"><i>￥145</i>&nbsp;&nbsp;&gt;</li>
                            </ul>
                            <ul>
                                <li className="item-left name" > <img src="/images/touxaing.png" alt=""></img>徐小明</li>
                                <li className="item-right km"> 1.5km</li>
                            </ul>
                        </div>
                        <div className="find-item-wrap" >
                            <p> 英语、语文 </p>
                            <ul>
                                <li className="item-left">7月16日 15：30-16：00</li>
                                <li className="item-right"><i>￥145</i>&nbsp;&nbsp;&gt;</li>
                            </ul>
                            <ul>
                                <li className="item-left name" > <img src="/images/touxaing.png" alt=""></img>徐小明</li>
                                <li className="item-right km"> 1.5km</li>
                            </ul>
                        </div>
                        <div className="find-item-wrap" >
                            <p> 英语、语文 </p>
                            <ul>
                                <li className="item-left">7月16日 15：30-16：00</li>
                                <li className="item-right"><i>￥145</i>&nbsp;&nbsp;&gt;</li>
                            </ul>
                            <ul>
                                <li className="item-left name" > <img src="/images/touxaing.png" alt=""></img>徐小明</li>
                                <li className="item-right km"> 1.5km</li>
                            </ul>
                        </div>
                        <div className="find-item-wrap" >
                            <p> 英语、语文 </p>
                            <ul>
                                <li className="item-left">7月16日 15：30-16：00</li>
                                <li className="item-right"><i>￥145</i>&nbsp;&nbsp;&gt;</li>
                            </ul>
                            <ul>
                                <li className="item-left name" > <img src="/images/touxaing.png" alt=""></img>徐小明</li>
                                <li className="item-right km"> 1.5km</li>
                            </ul>
                        </div>
                        <div className="find-item-wrap" >
                            <p> 英语、语文 </p>
                            <ul>
                                <li className="item-left">7月16日 15：30-16：00</li>
                                <li className="item-right"><i>￥145</i>&nbsp;&nbsp;&gt;</li>
                            </ul>
                            <ul>
                                <li className="item-left name" > <img src="/images/touxaing.png" alt=""></img>徐小明</li>
                                <li className="item-right km"> 1.5km</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </StyledFindItem>

        )
    }

    componentDidMount() {
        this.bScrollLeft = new BScroll('#scroll-wrap-find')

    }
}

export default FindItem