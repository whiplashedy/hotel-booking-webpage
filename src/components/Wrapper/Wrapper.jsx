import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Main from '../Main/Main';
import s from './Wrapper.module.css';

const Wrapper = () => {

    return (

        <div className={s.wrapper}>

            <Header />

            <div className={s.wrapper__content}>

                <Switch >

                    <Route exact path='/' component={Main} />

                    <Route path='/profile' component={Profile} />

                </Switch>

            </div>

        </div>

    )

}
export default Wrapper;