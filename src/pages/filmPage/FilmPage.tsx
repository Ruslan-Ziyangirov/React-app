import {observer} from "mobx-react";
import {useStores} from "../сollectionPage/Collection";
import {FC, useEffect, useState} from "react";
import {FilmModel} from "../../models/FilmModel";
import {useParams} from "react-router-dom";
import add from "../../add.svg";
import './FilmPage.sass';
import Header from "../../components/header/Header";
import {Film} from "../../components/collection/film/Film";

type Params = {
    id:string;
}

export const FilmPage =observer(() =>{
    const {collectStore: {collectionMock}} = useStores();
    const [filmPage, setFilmPage] = useState<FilmModel>();
    const {id}: Readonly<any> = useParams();

    useEffect(() => {
        const filmPage = collectionMock.find(filmPage => filmPage.id === +id);

        setFilmPage(filmPage);
    }, [id, collectionMock]);



    return(
       <div>{
               filmPage && (
                   <div>
                   <Header/>
                   <div className="film-page">

                       <img src={filmPage.img} alt="img" className="poster"/>
                       <div className="film-info">
                           <h1 className="title-film">
                               {filmPage.title}
                           </h1>
                           <div className="sub-film-info">
                                <p>2020</p>
                                <p className="rate">{filmPage.rate}</p>
                           </div>
                           <button className="btn-watch">
                               <img src={add} alt="img"/>
                               <p>Буду смотреть</p>
                           </button>
                           <p className="description">
                               {filmPage.description}
                           </p>
                           <span className="genre">{filmPage.genre}</span>
                       </div>
                   </div>
                   </div>
               )
           }
       </div>
     );
});