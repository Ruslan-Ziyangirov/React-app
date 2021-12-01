import './Film.css';
import {NavLink} from "react-router-dom";

export const Film = (props:any) => {

    return(

            <div className="film">
                <NavLink to={`/collection/${props.film.id}`} >
                    <p>{props.film.rate}</p>
                    <img src={props.film.img} alt='gff'/>
                    <h5>{props.film.title}</h5>
                </NavLink>
            </div>


    )

};