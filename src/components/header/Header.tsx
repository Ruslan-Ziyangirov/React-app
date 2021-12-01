import './Header.css';
import collections from "../../collections.svg";
import add from "../../add.svg";
import logo from "../../Logo_Short.svg";
import React from "react";
import {NavLink} from "react-router-dom";
import search from "../../search.svg";
import profile from "../../profile.svg"



const Header = () =>{


    return(
        <div className="header">
            <div className="menu">
                <NavLink to="#" className="collection-button">
                    <img src={collections} className="collections-img" alt="collections-img"/>
                    <span>Коллекция</span>
                </NavLink>

                <NavLink to="#" className="add-button">
                    <img src={add} className="add-img" alt="add-img"/>
                    <span>Добавить</span>
                </NavLink>

                <NavLink to="/collection" className="app-logo">
                    <img src={logo}  alt="logo"/>
                </NavLink>

                <div className="search-and-profile">
                    <img src={search} className="search-img" alt="search-img"/>
                    <input className="search-input" placeholder='Поиск' type='text'/>
                    <img src={profile} className="image-profile" alt="image-profile"/>
                </div>
            </div>

        </div>
    );

};

export default Header