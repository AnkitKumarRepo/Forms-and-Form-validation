import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormComponent from './FormComponent';
import SuccessPage from './SuccessPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={FormComponent} />
                <Route path="/success" component={SuccessPage} />
            </Switch>
        </Router>
    );
}

export default App;
