import React from 'react'

class Achievements extends React.Component {

    render() {
        return (
            <div id="Achievements">
                <h2>Achievements</h2>
                <div className="row">
                        <div className="12u">
                            <large className="icon fa-trophy"><span className="label"></span> Won 7 Hackathons</large><br/>
                            <h5>  I just love hackathons.</h5> 

                            <large className="icon fa-trophy"><span className="label"></span> Edward de Bono's Creativity Award at Directi (EIG)</large><br/>
                            <h5>   The annual creativity award was given to me for my work on designing the new Registrar Platform's core service.</h5>

                            <large className="icon fa-trophy"><span className="label"></span> SAP Developer Hero - 2017</large><br/>
                            <h5>   SAP selected 10 ‘Developer Heroes’ from within the community who had done interesting, innovative, collaborative stuff in the community. Watch the interviews below where I talk about it.</h5>
                </div>
            </div>
            <div className="row">
                        <div className="6u">
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/yhhInkg0KMY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                        <div className="6u">
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/H8oSZAfuz80" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>                        
                        </div>
          </div>
            <div className="row">
                        <div className="12u">
                            <br/>
                            <large className="icon fa-trophy"><span className="label"></span> Best Achiever Award - of MSRIT Computer Science 2017 Batch</large><br/>
                            <h5>  My university gave me the award for all my achievements in the 4 years of undergrad. </h5>

                            <large className="icon fa-trophy"><span className="label"></span> Best Capstone Project Award - of MSRIT, CS 2017</large><br/>
                            <h5>  My university gave me the award for my research work on automating stock trading with reinforcement learning. 
                                Check it out on Github.<a href="https://github.com/BangaloreSharks/SharkStock" target="_blank" className="icon fa-github"><span></span></a><br/>
                                <iframe src="https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
                                <iframe src="https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
                                <iframe src="https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
                            </h5>

                            <large className="icon fa-trophy"><span className="label"></span> ITC Infotech, iTech, 16 - Hackathon Winners</large><br/>
                            <h5> My team and I developed an augmented reality bike helmet. RidAR provides an unobtrusive navigation for bikers, so they need not stop and check their phone for directions. </h5>

                            <large className="icon fa-trophy"><span className="label"></span> NASA Space App Challenge,16 - Global Nomination for Best Problem Solver</large><br/>
                            <h5>  My team and I built a system that helped predict flight delays caused by adverse weather conditions with ML.</h5>

                            <large className="icon fa-trophy"><span className="label"></span> CSIR - All India Cyber Security Hackathon Winners</large><br/>
                            <h5>  My team and I built a prototype biometric payment system which lets you just use your finger as a credit card. Wallets and Cash are so last century! </h5>

                            <large className="icon fa-trophy"><span className="label"></span> Flockathon - Runner up</large><br/>
                            <h5>  I developed an integration that helps manage expenses for a group on the <a href="https://flock.com/">Flock messaging service</a>.</h5>

                        </div>
                </div>
            </div>
        )
    }
}

export default Achievements
