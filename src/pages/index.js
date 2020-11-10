import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import Showcase from '../components/Showcase'
import Experience from '../components/Experience'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import andarc from '../assets/images/andarc.png'
import logit from '../assets/images/logit.png'
import naturescall from '../assets/images/naturescall.png'
import ridar from '../assets/images/ridar.png'


import Education from '../components/Education';
import Achievement from '../components/Achievement';
import Research from "../components/Research";
import Skills from "../components/Skills";

const IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'How to write a State Machine in Java ?', description: 'Use State Machines to create an extensible backend framework', link: 'https://medium.com/'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Integrate Asynchronize APIs', description: 'Most systems are synchronous now. Can a synchronous system integrate with an Async API?', link: 'https://medium.com/'}
];

const BLOGS = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'How to write a State Machine in Java ?', description: 'Use State Machines to create an extensible backend framework', link: 'https://medium.com/'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Integrate Asynchronize APIs', description: 'Most systems are synchronous now. Can a synchronous system integrate with an Async API?', link: 'https://medium.com/'},
	{ id: '3', src: full02, thumbnail: thumb02, caption: 'Design Patterns in 5 minutes', description: 'Know your patterns. Do not reinvent the wheel.', link: 'https://medium.com/'},
	{ id: '4', src: full02, thumbnail: thumb02, caption: 'Asynchronous APIS', description: 'Learn the different ways of building Async apis.', link: 'https://medium.com/'},
	{ id: '5', src: full02, thumbnail: thumb02, caption: 'How to structure your backend codebase?', description: 'Its often looked over. The structure heavily effects the maintainability of code.', link: 'https://medium.com/'},
    { id: '6', src: full02, thumbnail: thumb02, caption: 'Should I learn Java ?', description: 'Why learn java when there are other mordern languages ?', link: 'https://medium.com/'},
    { id: '7', src: full02, thumbnail: thumb02, caption: 'How to not use Template Method Design Pattern', description: 'Extensively using  pattern can go horribly wrong. Leverage the advantages of the pattern without ruining your codebase.', link: 'https://medium.com/'},		
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Akhil"
        const siteDescription = "Resume"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="introduction">
                        <header className="major">
                            <h1>Hey, I am a Software Engineer at heart and a Computer Science enthusiast.<br /></h1>
                        </header>
                         <p>I am a problem solver and a go-getter. 
                            My greatest strengths are analytical problem-solving and developing sound hypotheses. I take pride in coming up with practical solutions for problems thrown at me. 
                            My diverse experience helps me look at problems with a unique perspective.  
                            Being brought up in Bangalore, the tech epicenter of India, I experienced a rich tech culture. 
                            I have worked for multiple early-stage startups before starting my career in one of India's first tech startups. I experienced how fun, working in a fast paced, dynamic and informal environment can be. 
                            In contrast, the time I spent at Cornell performing research taught me the benefits of a formal approach to problem-solving.
                            Now I work at Amazon where I am learning how to contribute to a well oiled nimble enterprise that operates at unfathomable scales!
                            </p>

                        <a href="https://drive.google.com/file/d/1j_-jsDpe7YL5h69MNFVLQrkAnKqT7uyy/view?usp=sharing" target="_blank">View Resume</a>
                    </section>

                    <section id="skills">
                        <Skills/>
                    </section>

                    <section id="experience">
                        <Experience/>
                    </section>

                    <section id="education">
                        <Education/>
                    </section>

                    <section id="education">
                        <Research/>
                    </section>

                    <section id="achivements">
                        <Achievement/>
                    </section>

                    <section id="achivements">
                        <div id="Achievements">
                            <h2>Gallery</h2>
                            <div className="row">
                                <div className="6u">
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/Ky49BDn2_bY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <br/>
                                    <b>Keras Get Started Walkthrough:</b> 
                                    <h5>Watch me show how to do Handwritten Digit Recognition using Convolutional Neural Networks in Python with Keras and Sentiment Analysis of Movie Reviews on IMDB </h5>
                                </div>
                                <div className="6u">
                                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTna9EcymqYHoxxrfMMqEpuPKLgkKDSYDURiAc5nJc0xbsIbDRQjqItYq8LsUCFVtxu4Vkde3oqQEt5/embed?start=true&loop=false&delayms=2000" frameborder="0" width="400" height="250" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
                                    </iframe>
                                    <br/>
                                    <b><a href="https://docs.google.com/presentation/d/e/2PACX-1vTna9EcymqYHoxxrfMMqEpuPKLgkKDSYDURiAc5nJc0xbsIbDRQjqItYq8LsUCFVtxu4Vkde3oqQEt5/pub?start=true&loop=true&delayms=3000" target="_blank">Event Driven Frameworks</a></b> 
                                    <h5>This session I taught was a part of the training program for incoming developers at Directi. 
                                        It talks about why event driven development is more scalable and gives a brief introduction to <a href="https://kafka.apache.org/" target="_blank">Apache Kafka</a>. 
                                        This was based on the blog written by <a href="https://martinfowler.com/articles/201701-event-driven.html" target="_blank">Martin Fowler</a>.
                                        Checkout the exercise on <a href="https://github.com/akhilraj95/kafka-demo"><span className="icon fa-github"></span></a></h5>
                                        
                                </div>
                            </div>
                            <div className="row">
                                <div className="6u">
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/f2xmXJjGSH4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <br/>
                                    <b>Xpense</b> 
                                    <h5>An expense manager for you team on the <a href="https://flock.com/">Flock Messege Service</a>. The integration was developed at Flockathon, Feb 2017. This app won the runner up at the hackathon.</h5>
                                </div>
                                <div className="6u">
                                    <iframe width="400" height="250" src="https://www.youtube.com/embed/fbssmD9DFBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <br/>
                                    <b><a href="https://akhilraj.dev/LogIt/?fbclid=IwAR1uAlMEgpKMo1E26ZpTuJHlwhVF95RBom0ur3IZO0NA_qrCOq63wAtuLn4">Logit</a></b> 
                                    <h5>Logit is an Android App that I developed in 2016. It lets you shoot and organize short videos, merge the short videos into one movie, add music and share it on any media.
                                        
                                    </h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="6u">
                                    <img src={naturescall} width="400" height="275"/>
                                    <br/>
                                    <b>NaturesCall</b> 
                                    <h5>This was a mobile friendly website built to find and navigate to the closest useable washroom in India. The website was easy to use. It even let you rate the washroom you used. This was developed for the DigitalOcean hack in 2016. The website is currently down because its not being actively maintained.</h5>
                                </div>
                                <div className="6u">
                                    <img src={ridar} width="400" height="275"/>
                                    <br/>
                                    <b><a href="https://akhilraj.dev/LogIt/?fbclid=IwAR1uAlMEgpKMo1E26ZpTuJHlwhVF95RBom0ur3IZO0NA_qrCOq63wAtuLn4">RidAr</a></b> 
                                    <h5>Runners up at ITC infotech AR/VR hackathon. 
                                        RidAR provides unobtrusive navigation for bikers, so they need not stop and check their phone for directions. 
                                        Android application that relays live navigation information from HERE maps API to the Bluetooth enabled helmet. 
                                        The Arduino attached to the helmet interprets the information and signals the biker on which turn to take when. </h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="6u">
                                    <img src={andarc} width="400" height="275"/>
                                    <br/>
                                    <b>Andarc</b> 
                                    <h5>Andarc is an Android Game that was developed on the Corona Game Engine. It was developed as a part of a game development challenge by Corona Labs. Andarc was chosen as the runner up. It is currently removed from the playstore because I am not actively maintaining it.</h5>
                                </div>
                                <div className="6u">
                                    <img src={logit} width="400" height="275"/>
                                    <br/>
                                    <b><a href="https://akhilraj.dev/LogIt/?fbclid=IwAR1uAlMEgpKMo1E26ZpTuJHlwhVF95RBom0ur3IZO0NA_qrCOq63wAtuLn4">Logit</a></b> 
                                    <h5>Screenshots of the <a href="https://akhilraj.dev/LogIt/?fbclid=IwAR1uAlMEgpKMo1E26ZpTuJHlwhVF95RBom0ur3IZO0NA_qrCOq63wAtuLn4">Logit</a> Android App that I developed.</h5>
                                </div>
                            </div>

                        </div>
                    </section>
                    
                    {/* <section id="Gallery">
                        <h2>Writing</h2>

                        <Gallery images={IMAGES.map(({ id, src, thumbnail, caption, description, link}) => ({
                            src,
                            thumbnail,
                            caption,
                            description, 
                            link
                        }))} />

                    </section> */}
{/* 
                    <section id="Writing">
                        <h2>Writing</h2>

                        <Showcase images={BLOGS.map(({ id, src, thumbnail, caption, description, link}) => ({
                            src,
                            thumbnail,
                            caption,
                            description, 
                            link
                        }))} />

                    </section> */}

                    <section id="contact">
                        <h2>Get In Touch</h2>
                        <p>Best way to get in touch with me is by email.</p>
                        <div className="row">
                            <div className="12u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a>akhil95raj@gmail.com</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">University Email</span></h3>
                                        <a>ara242@cornell.edu</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        (607)-319-1862
                                    </li>
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        <a href="https://goo.gl/maps/BXe2XCT6KHzs18Jv7" target="_blank" >Seattle, Washington - 98101<br />
                                        United States</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex