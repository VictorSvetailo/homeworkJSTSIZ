import React from 'react'
import {NavLink, Route, Routes} from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Header from './Header';
import Error404 from './pages/Error404';

export const PATH = {
    MAINPAGE: '/',
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    // add paths
}


export function RoutesFC() {
    return (
        <div>
            <h1>MainPage</h1>

            <Routes>
                    <Route path={'/'}/>
                    <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                    {/*<Route path={PATH.JUNIOR} element={<h1> junior page находится в разработке</h1>}/>*/}
                    {/*<Route path={PATH.JUNIOR_PLUS} element={<h1>junior + находится в разработке</h1>}/>*/}
                    {/*<Route path={'/*'} element={<Error404/>}/>*/}
            </Routes>

            {/*Switch выбирает первый подходящий роут*/}
            {/*<Switch>*/}
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}
            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*</Switch>*/}
        </div>
    )
}
