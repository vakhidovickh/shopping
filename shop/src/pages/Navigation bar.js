import React, {Component} from 'react';
import '../styles/navbar.css'
import {IoLocationSharp} from 'react-icons/io5'

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="container">
                        <div className="nav">
                            <div className="nav__location">
                                <a href="#">О нас</a>
                                <IoLocationSharp/>
                                <a href="#">Ташкент</a>
                            </div>
                            <div className="nav__contact">
                                <h3>+99899 000 00 00</h3>
                                <p>Заказать звонок</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
