import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

import mainImage from './photos/main_image.jpg';
import hotelRoom1 from './photos/hotel_room_1.jpg';
import hotelRoom2 from './photos/hotel_room_2.jpg';
import lobsterImage from './photos/lobster_meal.jpg';

import igloo from './photos/igloo_freePik.svg';
import planeOverWorld from './photos/travel_iconPod.svg';
import map from './photos/map_freePik.png';



//make nav buttons click-area the whole button (not just the text)

//fix graph cutoff at specific screen widths due to static font sizing in the state (chart.js)

//make form with nodemailer (install library too)

function App() {

    useEffect(() => {
        AOS.init();
        // AOS.refresh;
    }, []);

  return (
    <body>

    <section id="top-section">

        <div id="text-container">
            <h2 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Experience</h2>
            <h1 data-aos="fade-left" data-aos-delay="400" data-aos-duration="1500">An Exceptional Lodge</h1>
        </div>

        <div id="image-container">
            <img src={mainImage} alt="" />
        </div>

        <div className="streak" />
        <div className="streak secondStreak" />

        <div className="streakReverse" />
        <div className="streakReverse secondReverseStreak" />

    </section>

    <section id="card-container-section">
        <div id="cards-container">
            <div className="card">
                <div className="card-svg-container">
                    <img src={map} id="map"/>
                </div>

                <div className="text-container">
                    <h2>
                        Seamlessly Easy Access
                    </h2>

                    <p>
                        Our <span style= {{color: 'rgb(252, 236, 144)'}}>Personalized Warder Map</span> provides the quickest route to the nearest <span style={{color: 'rgb(170, 168, 162)'}}>Warder Lodge</span> near you!
                    </p>
                </div>
            </div>

            <Link to="/booking" className="card middle-card">
                <div className="card-svg-container">
                    {/* <i className="fas fa-passport"></i> */}
                    <img src={planeOverWorld} id="planeOverWorld"/>
                </div>

                <div className="text-container">
                    <h2>
                        Anywhere in the World
                    </h2>

                    <p>
                        Warder Hotels can located on <span style={{color:'rgb(112, 236, 164)'}}>12 countries</span> and 5 continents all around the world!
                    </p>
                </div>
            </Link>

            <div className="card">
                <div className="card-svg-container">
                    {/*<i className="fas fa-igloo"></i>*/}
                    <img src={igloo} id="logo"/>
                </div>

                <div className="text-container">
                    <h2>
                        Unique Locations
                    </h2>

                    <p>
                        Our lodges provide comfort in exotic and unique locations, from <span style={{color:'rgb(139, 250, 250)'}}>Ice Hotels</span> to <span style={{color: 'rgb(124, 188, 248)'}}>Tanzmainian Tree Houses</span>.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <div className="second-section-container" data-aos-offset="-10" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"> {/*data-aos-offset="-10" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"*/}

        <div className="second-image-container" id="lodge-picture">
            <img src={hotelRoom1} alt="" />
        </div>

        <div className="second-text-section">
            <h2>
                About The Lodge
            </h2>

            <p>
                Warder is designed to be a sanctuary, wheather in the middle of the city, or in the countryside,
                The Warder knows that a little comfort goes a long way.
            </p>

            <h3 className="follow-up-button">
                More Info
                <div/>
            </h3>
            </div>
    </div>

    <div className="second-section-container" data-aos-offset="-10" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"> {/*data-aos-offset="-10" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"*/}

        <div class="second-image-container"  id="unique-picture">
            <img src={hotelRoom2} alt="" />
        </div>

        <div className="second-text-section">
            <h2>
                Unique and Clean
            </h2>

            <p>
                Warder Hotels are always welcoming with a Unique enviromvent to satisfy your travels.
                Lodge rooms are always cleaned daily and upon request.
            </p>

            <h3 className="follow-up-button">
                More Info
                <div/>
            </h3>
        </div>
    </div>

    <div className="second-section-container" data-aos-offset="-10" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"> {/*data-aos-offset="-10" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"*/}

        <div className="second-image-container" id="amenaties-picture">
        <img src={lobsterImage} />
        </div>

        <div className="second-text-section">

            <h2>
                Amenaties
            </h2>

            <p>
                Whether you’re looking for a healthy breakfast or a late-night snack, 
                our award-winning kitchen has you covered.
            </p>

            <h3 className="follow-up-button">
                More Info
                <div/>
            </h3>
        </div>
    </div>

    <section id="quote-section" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
        <div id="quote-container">
            <h2><span>"</span>Home is not a place, its a feeling<span>"</span></h2>
        </div>

        <div id="divider" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"/>

        <div id="comment-container">
            <p>We know that home is where you're happiest so our lodges provide the comfort to make our lodges your personal home.</p>
        </div>
    </section>

    <section id="order-section">
    </section>
    </body>
  );
}

export default App;
