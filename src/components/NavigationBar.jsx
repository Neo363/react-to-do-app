import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        {/* <a href="/">Home </a> */}
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                        {/* <a href="/about">About</a> */}
                    </li>

                    {/* <li>
                        <a href="#">Contact</a>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}
