import React from 'react'

import CornellUrl from '../assets/images/Cornell_University_seal.svg';
import RamaiahUrl from '../assets/images/Ramaiah_Institutions_Logo.png';


class Education extends React.Component {
    render() {
        return (
            <div id="Education">
                <h2>Education</h2>
                    <div className="row">
                        <div className="7u 12u$(small)">
                            <h3>Master of Engineering, Computer Science </h3>
                            Cornell University<br/>
                            <div>GPA: 4.017</div>
                            <div></div><br/>
                        </div>
                        <div className="5u 12u$(small)">
                            <a href = "https://www.cornell.edu/" target="_blank" > 
                            <img src={CornellUrl} style={{width:'6em', height:'6em'}}/>    
                            </a>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="12u 12u$(small)">
                            <b>Distributed Systems Research:</b> 
                            <ul>
                                <li>Worked under Professor <a href="https://www.cs.cornell.edu/~ragarwal/index.html" target="_blank">Rachit Agarwal</a>  on 
                                efficiently multiplexing cache capacity across multiple tenants operating in a shared cluster while providing isolation guarantees.</li>
                                <li>Working under Professor <a href="https://www.cs.cornell.edu/~ragarwal/index.html" target="_blank">Rachit Agarwal</a>  on 
                                building a generic scheduler for shared resources in a disaggregated multitenant system.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <b>What have I studied at Cornell ?</b> <br/>
                        <text>My research focus was on systems but the courses I took were mostly on ML. My objective was to generalize not specialize.</text>

                        <div className="6u 12u$(small)">
                            <ul> 
                                <li>Advanced Artificial Intelligence</li>
                                <li>Machine Learning for Intelligent Systems</li>
                                <li>Natural Language Processing</li>
                                <li>Designing New Ventures</li>
                            </ul>
                        </div>
                        <div className="6u 12u$(small)">
                            <br/>
                            <ul> 
                                <li>Machine Learning for Data Science</li>
                                <li>Introduction to Computer Vision</li>
                                <li>Cloud Computing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="7u 12u$(small)">
                            <h3>Bachelor of Engineering, Computer Science</h3>
                            Ramaiah Institute of Technology<br/>
                            <div>GPA: 9.35</div>
                            <div></div><br/>
                        </div>
                        <div className="5u 12u$(small)">
                            <a href = "http://www.msrit.edu/" target="_blank" > 
                            <img src={RamaiahUrl} style={{width:'5em', height:'6em', marginLeft:'0.5em'}}/>    
                            </a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Education
