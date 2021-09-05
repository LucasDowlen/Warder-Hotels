import React, { useState } from 'react';
//import {Pie} from 'react-chartjs-2';

import  Chart from './Chart';
import Map from './map.js'

import hotel from './photos/building_smalllikeart.svg';
import country from './photos/canada_freepik.svg';
import continent from './photos/earth-globe_freepik.svg';
import filter from './photos/filter-filled-tool-symbol-svgrepo-com.svg';


// import forestLodge from './photos/forest-lodgeS.jpg'
import forestLodgeHD from './photos/forest-lodgeHD.jpg'; 

// import desertHut from './photos/desert-hut-S.jpg';
import desertHutHD from './photos/desert-hut-HD.jpg';

function Book() {

    const [countrySelected, setCountry] = useState("Select");
    const [pointerStyles, setPointerEvents] = useState("none");
    const [pageContentArray, updateContentArray] = useState([]);


    const updateSelection = (country, pointerEvents) => {

        if(country !== null){
            setCountry(country); 
            updatePageContent(country);
        }

        if(pointerEvents === true){
            setPointerEvents("all");
        }

        else{
            setPointerEvents("none");
        }

    }

    const updatePageContent = (country) => {
        if (country === "United States") {
            updateContentArray( //updating one update too late
                [["Warder SpringSide", "A perfect spot in Springside, Calafornia that is famous for its crystal water.", forestLodgeHD], 
                ["Orlando Resort", "A location less than a mile from Disney World and only 15 mintes from the beach.", desertHutHD]]
            );
        }

        else if (country === "Russia") {
            updateContentArray(
                [["Krüsthiv Lodge", "Warder's lodge on lake Krüsthiv Pürkan basked in a ray of communsim.", forestLodgeHD]]
            )
        }

        else{
            updateContentArray([]);
        }
    }

    return (
        <body>
            <div id="map-container">
                <Map updateSelectedCountry={updateSelection}/>
            </div>

            <div id="all-info-container">
                <div id="first-info-container">
                    <div className="sub-info">
                        <div className="sub-info-text">
                            <h1>278</h1>
                            <h2>Lodges</h2>
                        </div>

                        <div className="sub-info-image">
                            <img src={hotel} />
                        </div>
                    </div>

                    <div className="sub-info">
                        <div className="sub-info-text">
                            <h1>12</h1>
                            <h2>Countries</h2>
                        </div>

                        <div className="sub-info-image">
                            <img src={country} />
                        </div>
                    </div>

                    <div className="sub-info">
                        <div className="sub-info-text">
                            <h1>5</h1>
                            <h2>Continents</h2>
                        </div>

                        <div className="sub-info-image">
                            <img src={continent} />
                        </div>
                    </div>
                </div>

                <div id="stats-graph-section">
                    <Chart />
                </div>
            </div>

            <main id="hotels-selection-section">
                <div id="selections-navbar">
                    <div id="selection-dropdown-section">
                        <h3>Select Country</h3>
                        <div id="countriesDropdown">
                            <button onClick={() => updateSelection(null, true)}>{countrySelected}</button>

                            <ul id="country-choices" style={{pointerEvents: pointerStyles}}>
                                <li onClick={() => updateSelection("United States", false)}>United States</li>
                                <li onClick={() => updateSelection("Russia", false)}>Russia</li>
                                <li onClick={() => updateSelection("China", false)}>China</li>
                                <li onClick={() => updateSelection("France", false)}>France</li>
                                <li onClick={() => updateSelection("Italy", false)}>Italy</li>
                                <li onClick={() => updateSelection("Australia", false)}>Australia</li>
                                <li onClick={() => updateSelection("Ireland", false)}>Ireland</li>
                                <li onClick={() => updateSelection("Egypt", false)}>Egypt</li>
                                <li onClick={() => updateSelection("Chad", false)}>Chad</li>
                                <li onClick={() => updateSelection("Lybia", false)}>Lybia</li>
                                <li onClick={() => updateSelection("Algeria", false)}>Algeria</li>
                            </ul>
                        </div>
                    </div>

                    <div id="selection-filter-section">
                        <h3>Filter</h3>
                        <img src={filter} /> 
                        {/* maybe use fontAwesome insead */}
                    </div>
                </div>

                <ul id="page-content">
                    {pageContentArray.map((nestedArray) => ( //figure out what to do with info
                        <li className="selection-container">
                            {/* <h2>{pageContentArray[index][0]}</h2>
                            <p>{pageContentArray[index][1]}</p> */}
                            <div class="selection-image">
                                <img src={nestedArray[2]} />
                            </div>

                            <div class="selection-text">
                                <h2>{nestedArray[0]}</h2>
                                <p>{nestedArray[1]}</p>
                                <button>Order Now</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </body>
    )
}

export default Book