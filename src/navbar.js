import React from 'react';

import { Link } from 'react-router-dom';

//capatalized first letter of navbar;
function Navbar() {
    return (
        <nav>
            <ul>
                {/* Reverse Link and List tags and CSS Styles but fix the worng text sizes */}
                <li class="brown-button">
                    <Link to="./booking">Book Now</Link>
                    <div>
                        <div></div>
                    </div>
                </li>
                <li>
                    <Link to="./contact">Contact</Link> 
                    {/* not sure about . before / in to=; */}
                    <div>
                        <div></div>
                    </div>
                </li>

                <li className="first">
                    <Link to="/">Warder</Link>
                    {/* <div>
                        <div></div>
                    </div> */}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
