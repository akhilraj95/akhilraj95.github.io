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
                            <b>Computer Science, Masters of Engineering</b><br/>
                            Cornell University.Graduating in 2020.
                        </div>
                        <div className="5u 12u$(small)">
                            <img src={CornellUrl} style={{width:'6em', height:'6em'}}/>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="7u 12u$(small)">
                            <b>Bachelors in Engineering, Computer Science</b><br/>
                            M.S Ramaiah Institute of Technology
                        </div>
                        <div className="5u 12u$(small)">
                            <img src={RamaiahUrl} style={{width:'5em', height:'6em', marginLeft:'0.5em'}}/>    
                        </div>
                    </div>
            </div>
        )
    }
}

export default Education
