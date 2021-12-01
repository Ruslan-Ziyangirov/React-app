
import {CollectionStore} from "./collectionStore";

class MainStore{

    collectStore: CollectionStore

    constructor() {
        this.collectStore = new CollectionStore();
    }
}

export const mainStore = new MainStore();

export default mainStore;

export {MainStore}