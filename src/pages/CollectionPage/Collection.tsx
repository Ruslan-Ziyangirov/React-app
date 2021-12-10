import Header from "../../components/header/Header";
import NavigationBar from "../../components/collection/navigationbar/NavigationBar";
import './CollectionPage.sass';
import {MobXProviderContext, observer} from "mobx-react";
import {Film} from "../../components/collection/Film/Film";
import {useContext} from "react";
import {MainStore} from "../../components/stores/mainStore";

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