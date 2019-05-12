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
import Education from '../components/Education';
import Achievement from '../components/Achievement';

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
                            <h1>Hey, I am a Software Developer at heart and a Computer Science enthusiast.<br /></h1>
                        </header>
                        <p>I am a problem solver. I believe my strongest skill is the ability to analyze problems deeply and come up with practical solutions. Studying in Bangalore the technological center of India, I was exposed to a rich culture of tech startups, coding meetups, and hackathons. This culture taught me that, any problem can be solved with a bit of creative and out of the box thinking. It is the engineer’s responsibility to design and develop a practical implementation of the solution. The ability of an individual computer science engineer to make a great impact was what influenced me to study computer science.</p>
                    </section>

                    <section id="experience">
                        <Experience/>
                    </section>

                    <section id="education">
                        <Education/>
                    </section>

                    <section id="achivements">
                        <Achievement/>
                    </section>

                    <section id="Gallery">
                        <h2>Writing</h2>

                        <Gallery images={IMAGES.map(({ id, src, thumbnail, caption, description, link}) => ({
                            src,
                            thumbnail,
                            caption,
                            description, 
                            link
                        }))} />

                    </section>

                    <section id="Writing">
                        <h2>Writing</h2>

                        <Showcase images={BLOGS.map(({ id, src, thumbnail, caption, description, link}) => ({
                            src,
                            thumbnail,
                            caption,
                            description, 
                            link
                        }))} />

                    </section>

                    <section id="contact">
                        <h2>Get In Touch</h2>
                        <p>Best way to contact me is by email.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
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