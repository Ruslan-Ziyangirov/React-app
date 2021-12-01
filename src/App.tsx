import React from 'react';
import './App.css';
import Form from "./components/signIn/form/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/registration/form/RegistrationForm";
import {Collection} from "./components/collection/Collection";
import {Provider} from "mobx-react";
import MainStore from "./components/stores/mainStore";
import {FilmPage} from "./components/collection/FilmPage";


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