import React from 'react'
import Header from './Header'
import {RoutesFC} from './RoutesFC';
import {Count} from '../h5-rrd-v6/count';

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>
            <RoutesFC/>
            {/*<Count/>*/}
            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
