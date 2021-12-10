import React from 'react';
import './App.css';
import Form from "./pages/formSignIn/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/formRegistration/RegistrationForm";
import {Collection} from "./pages/CollectionPage/Collection";
import {Provider} from "mobx-react";
import MainStore from "./components/stores/mainStore";
import {FilmPage} from "./pages/FilmPage/FilmPage";


const App = () => (
    <Router>
        <Provider {...MainStore}>
            <Routes>
                <Route path="/" element={<Form/>}/>
                <Route path="/signIn" element={<Form/>}/>
                <Route path="/registration" element={<RegistrationForm/>}/>
                <Route path="/collection" element={<Collection/>}/>
                <Route path='/collection/:id'  element={<FilmPage/> }/>
            </Routes>
        </Provider>
    </Router>
);

export default App;