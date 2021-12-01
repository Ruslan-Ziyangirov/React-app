import {NavLink} from "react-router-dom";
import changeButtonList from "../../../changebuttonlist.svg";
import './NavigationBar.css';

const NavigationBar = () =>{

    return(
        <div className="switch">
            <div className="button-area">
                <div className="main-button">
                    <input type="checkbox" className="checkbox"/>
                    <div className="text"/>
                    <div className="textBack"/>
                </div>
            </div>

            <NavLink to="#" className="changeButtonList">
                <img src={changeButtonList} alt="gf" />
            </NavLink>
        </div>
    );

};

export default NavigationBar

