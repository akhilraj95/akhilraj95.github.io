import React from 'react'


class Skills extends React.Component {
    render() {
        return (
            <div id="Skills">
                <h2>Skills</h2>
                    <div className="row">
                        <div className="12u$(small)">
                            <b>Professionally</b>, I have experience in strategically breaking down legacy systems to microservices, adopting cloud, zero downtime system migrations, designing and authoring services from scratch, moving from synchronous to asynchronous systems. My experience redesigning the legacy monolith at my previous company enables me to develop highly scalable, reliable and performant systems.
                            <br/> 
                            <br/> 
                            <b>In Academia,</b> I have experience doing systems research with a focus on multitenancy. I have worked on providing fairness gurantees in resource sharing.  
                            At the moment, I am working on scheduling shared resources in disaggregated systems. 
                            <br/> 
                            <br/> 
                            <b>At university,</b> I studied Machine learning, Natural Language Processing and Computer Vision. In the past I have dabbled with some research on Reinforcement learning and Common Sense Reasoning.
                        </div>
                    </div>
                    <div className="row">
                        <div className="6u 6u$(small)">
                            <br/>
                            <b>Languages I can code in</b>
                            <ul>
                                <li>Java - My preferred lang (3 yrs pro)</li>
                                <li>Python - My preferred scripting lang (3 yrs pro)</li>
                                <li>C++/C - Basic working knowledge (1 yr pro) </li>
                                <li>GO - Newly acquired</li>
                                <li>Javascript - Basic Working knowledge</li>
                            </ul>
                            <b>Machine Learning and AI</b>
                            <ul>
                                <li>Experience with Neural Networks (Deep Learning) for</li>
                                    <ol>                               
                                        <li>Reinforcement Learning</li>
                                        <li>Sentiment Analysis</li>
                                        <li>Predictive analytics</li>
                                    </ol>
                                <li>Natural Language Processing
                                    <ol>                               
                                        <li>Fine tuning BERT, OpenGPT</li>
                                        <li>Experience with transformers</li>
                                        <li>Feature Engineering</li>
                                        <li>Classification, Generation, Common Sense Reasoning</li>
                                    </ol>
                                </li>
                                <li>Building Classification / Clustering Models</li>
                                <li>Familiarity with SVM, Bayesian Models, Online Learning.</li>
                            </ul>
                            <b>Experience working in Academia with</b>
                            <ul>                               
                                <li>Pytorch, TensorFlow, Keras</li>
                                <li>Scikit-Learn, Numpy, NLTK, Matlab/Octave, R</li>
                            </ul>

                        </div>

                        <div className="6u 6u$(small)">
                            <br/>
                            <b>Engineering</b>
                            <ul>
                                <li>Backend Engineering</li>
                                <li>Designing services from scratch</li>
                                <li>Designing for highly scalability</li>
                                <li>Designing for highly availability</li>
                                <li>Breaking down legacy systems to microservices</li>
                                <li>Adopting Cloud</li>
                                <li>Zero downtime system migration</li>
                                <li>Event Driven Programming</li>
                                <li>Moving from synchronous to asynchronous</li>
                            </ul>
                        
                            <b>Experience working in industry with</b>
                            <ul>                               
                                <li>Relational Databases (Postgres, MySQL)</li>
                                <li>NoSQL Databases (Casandra, Redis, MongoDB)</li>
                                <li>Message Queues (ActiveMQ, AWS SQS, Kafka)</li>
                                <li>API Gateway (Kong, Zuul, AWS Gateway)</li>
                                <li>Designing REST APIs</li>
                                <li>Asynchronous APIs (With Callbacks and Reactive)</li>
                                <li>Caching (With Redis and Caffeine)</li>
                                <li>Cloud (AWS)</li>
                                <li>Containerization (Docker, Docker Compose)</li>
                                <li>Git</li>
                                <li>CICD</li>
                                <li>Scrum</li>
                                <li>Frameworks - Spring, Spring Boot, Maven, Gradle, Django, Flask</li>
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Skills
