import React, {useEffect, useState} from 'react';
import './RegistrationForm.css';
import logo from "../../../logo.svg";
import {NavLink} from "react-router-dom";

const RegistrationForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword,setRepeatedPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [repeatedPasswordDirty,setRepeatedPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [repeatedPasswordError,setRepeatedPassworError]= useState('')
    const [formValid, setFormValid] = useState(false)

    //если одна из ошибок изменяется, то функция срабатывает
    useEffect(() => {
        if (emailError || passwordError || repeatedPasswordError){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [emailError,passwordError,repeatedPasswordError]);


    //изменяем состояние, когда пользователь пытается что-то ввести
    const emailHandler = (e:any) =>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //если введенное в инпуте не соответсвует данному регулярному выражению, то в состояние с ошибкой добавляем, что этот емейл некорректен
        if(!re.test(String(email).toLowerCase())){
            setEmailError('Неверный логин или пароль')
        }else {
            setEmailError("")
        }
    }

    const passwordHandler = (e:any) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8 ) {
            setPasswordError('Неверный логин или пароль')

            if (!e.target.value){
                setPasswordError('Пароль не может быть пустым')
            }

        }else {
            setPasswordError('')
        }
    }

    const repeatedPasswordHandler = (e:any) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8 ) {
            setRepeatedPassworError('Неверный логин или пароль')

            if(e.target.value !== password){
                setRepeatedPassworError('Пароли не совпадают')
            }

            if (!e.target.value){
                setRepeatedPassworError('Пароль не может быть пустым')
            }

        }else {
            setRepeatedPassworError('')
        }
    }

    //функция срабатывает, когда убираю курсор из инпута
    const blurHandler = (e:any) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'repeatedPassword':
                setRepeatedPasswordDirty(true)
                break
        }
    }

    return(
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <form className="registration-form">
                <input onChange={e => emailHandler(e) } value={email} onBlur={e => blurHandler(e) } name='email' type="email" placeholder="Адрес электронной почты" className="email"/>
                <input onChange={e => passwordHandler(e) } value={password} onBlur={e => blurHandler(e) } name='password' type="password" placeholder="Пароль" className="password"/>
                <input   name='repeatedPassword' type="password" placeholder="Повторный пароль" className="password"/>
                {
                    // eslint-disable-next-line no-mixed-operators
                    (emailDirty && emailError || passwordDirty && passwordError || repeatedPasswordDirty&& repeatedPasswordError) &&
                    <div className="error">{emailError || passwordError|| repeatedPasswordError}</div>
                }
                {/*{*/}
                {/*    (passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>*/}
                {/*}*/}
                <button disabled={!formValid}  type="submit" className="button">
                    Регистрация
                </button>

                <div className="prompt">
                    <p>Еще не зарегистрированы?</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <NavLink to="/signIn">Войти</NavLink>
                </div>
            </form>
        </div>
    </div>
    )
};

export default RegistrationForm