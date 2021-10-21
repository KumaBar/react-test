import React from 'react'
import {
    Link,
    Switch,
    Route,
} from 'react-router-dom'
import { Pages } from '../Pages/Routes'

export default  function App() {

    return <React.Fragment>
        <Switch>
            {Pages.map((page, index) => <Route exact path={page.link} component={page.component} key={index} />)}
        </Switch>
    </React.Fragment>
}