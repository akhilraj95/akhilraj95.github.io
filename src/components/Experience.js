import React from 'react'

class Experience extends React.Component {
    render() {
        return (
            <div id="Experience">
                <h2>Experience</h2>
                <div className="row">
                        <div className="6u 12u$(small)">
                            <large><b>Software Development Engineer II @ <a href="https://www.linkedin.com/company/amazon" target="_blank">Amazon</a> </b></large>
                        </div>
                        <div className="6u 12u$(small)" align="right">
                            <large>4 months (June 2020 - present)</large>
                        </div>
                </div>
                <div className="row">
                        <div className="12u 12u$(small)">
                            <p>I work in Amazon's supply chain optimization team. My team builds and maintains a simulation platform that models Amazon supply chain with high fidelity. 
                            <ul>
                                <li>I am working on overhauling the data collection pipelines for my team.  
                                    <ol>
                                        <li>Migrating the simulator's ETL pipelines to Spark(AWS EMR)</li>
                                        <li>Redesigning the orchestration for the ETL jobs by onboarding the system on to AWS Step Functions</li>
                                    </ol>
                                </li>
                            </ul>
                            </p>
                        </div>
                </div>
                <div className="row">
                        <div className="6u 12u$(small)">
                            <large><b>Software  Engineer @ <a href="https://www.linkedin.com/company/endurance-international-group/" target="_blank">LogicBoxes - Directi (EIG)</a> </b></large>
                        </div>
                        <div className="6u 12u$(small)" align="right">
                            <large>2 years 1 month (June 2017 - July 2019)</large>
                        </div>
                </div>
                <div className="row">
                        <div className="12u 12u$(small)">
                            <p>Experience ranging from authoring large scale, highly available microservice from scratch to skilfully migrating legacy monolithic services.
                            <ul>
                                <li>Core member involved in redesigning and migrating PDR (Public Domain Registry), worlds 2nd biggest domain registrar to a microservice architecture.
                                    <ol>
                                        <li>Decoupled a legacy monolithic code base to discrete services for scalability and reliability.</li>
                                        <li>Developed Asynchronous APIs – Webhooks with Retries</li>
                                        <li>Designed A State Machine Framework – Transactional states, Retry on Failure.</li>
                                        <li>Zero downtime migration to the new system.</li>
                                        <li>Presenter of design at the Milestone Meetings.</li>
                                    </ol>
                                </li>
                            
                                <li>Worked on getting the system GDPR compliant under a severely tight deadline.</li>
                                <li>Developed a search engine for domains with fuzzy & synonym matching.</li>
                                <li>Designed a service that Synchronized Asynchronous APIs for backward compatibility.</li>
                                <li>Responsible for 11M domains lifecycles, Nameservers and whois servers.</li>
                                <li>Introduced “Rotating Paired On-Calls” to improve resolution time for incidents in my team.</li>
                                <li>Member of the Interview panel for lateral and campus hires.</li>
                            </ul>
                            </p>
                        </div>
                </div>
                <div className="row">
                        <div className="6u 12u$(small)">
                            <large><b>Software  Developer Intern @ <a href="https://www.linkedin.com/company/li2-innovations/">Li2 innovations</a></b></large>
                        </div>
                        <div className="6u 12u$(small)" align="right">
                            <large>6 month (January 2016 - July 2016)</large>
                        </div>
                </div>
                <div className="row">
                        <div className="12u 12u$(small)">
                            <ul>
                                <li>Automated a tedious manual process by building a Web Scraper for vendor data collection</li> 
                                <li>System generated emails for customer verification and order acknowledgment.</li>
                            </ul>
                        </div>
                </div>
            </div>

            
        )
    }
}

export default Experience
