import React, { Component } from 'react';

class Research extends React.Component {
    
    render() {
        return (
            <div id="Research">
                <h2>Research</h2>
                    <div className="row">
                        <div className="12u 12u$(small)">

                            <h3>Optimizing Underutilized Cache In Multi-tenant Databases
                                <h6>Working under the guidance of Professor <a href="https://www.cs.cornell.edu/~ragarwal/index.html" target="_blank">Rachit Agarwal</a>, Asaf Cidon and Anurag Khandelwal</h6>
                            </h3>

                            <h5>
                            The research strives to determine a policy which takes advantage of the underutilized cache in a multi-tenant memory disaggregated database to optimize performance. 
                            To provide isolation guarantee the multi-tenant databases require allocation of resources for simultaneous maximum utilization. 
                            In practice, these resource capacities defined for worst-case operations are often under-utilized. 
                            </h5> 

                        </div>
                    </div>
                    <div className="row">
                        <div className="12u 12u$(small)">

                            <h3>Scheduling shared disaggregated resources in a multitenant system
                                <h6>Working under the guidance of Professor <a href="https://www.cs.cornell.edu/~ragarwal/index.html" target="_blank">Rachit Agarwal</a>, Asaf Cidon and Anurag Khandelwal.</h6>
                            </h3>

                            <h5>
                             We designed a generic, extensible resource scheduler that can facilitate resource sharing across multiple tenants operating in a disaggregated computing architecture.  
                            </h5> 

                        </div>
                    </div>
                    <div className="row">
                        <div className="12u 12u$(small)">

                            <h3>Stock Trading Automation with Reinforcement Learning
                                <h6>Proceedings of the Fifth ICICSE 2017 - DOI: 10.1007/978-981-10-8201-6_5</h6>
                            </h3>
                            <h5>
                            This paper proposes automating swing trading using deep reinforcement learning.
                            The deep deterministic policy-gradient based neural network model trains to choose an action to sell, buy or hold the stocks to maximize the gain in asset value. 
                            The system also predicts the trend in stock value to work along with the reinforcement learning algorithm. 
                            We implemented a sentiment analysis model using a recurrent convolutional neural network to predict the stock trend from the financial news. 
                            The objective of this paper is not to build a better trading bot but to prove that reinforcement learning is capable of learning the tricks of stock trading.<br/>
                                <a href="https://drive.google.com/file/d/19zgIJTEgSyO8AQhq__M1o5R1NCXTmvUf/view?usp=sharing" target="_blank"> Download the unofficial paper.</a><br/>
                                <a href="https://www.researchgate.net/publication/325385951_Stock_Trading_Bot_Using_Deep_Reinforcement_Learning/stats" target="_blank"> Checkout the stats.</a>
                            </h5>
                            <iframe src="https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
                            <iframe src="https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
                            <iframe src="https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Research
