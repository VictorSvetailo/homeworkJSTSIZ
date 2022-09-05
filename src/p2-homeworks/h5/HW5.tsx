import React from 'react'
import Header from './Header'
import {RoutesFC} from './RoutesFC';

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>
            <RoutesFC/>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
