import Header from "../header/Header";
import NavigationBar from "./navigationbar/NavigationBar";
import './CollectionPage.css';
import {MobXProviderContext, observer} from "mobx-react";
import {Film} from "./Film";
import {useContext} from "react";
import {MainStore} from "../stores/mainStore";

export function useStores(): MainStore {
    return useContext(MobXProviderContext) as MainStore;
}



export const Collection = observer(() =>{
    const {collectStore: {collectionMock}} = useStores();



    return(
        <div className="collection-page">
            <Header/>
            <h1>
                Коллекция
            </h1>
            <NavigationBar/>
            <div className="film-collection">
                {
                    collectionMock.map((film) => (<Film  film={film}/>))
                }
            </div>
        </div>
    );
});