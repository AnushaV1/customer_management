import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import AllCustomers from "./AllCustomers";
import AddNewCustomer from "./AddNewCustomer";

const Routes = () => {
    return (
        <div>
        <Switch>
        <Route exact path="/">
        <Home />
            </Route>
            <Route exact path="/newcustomers">
                <AddNewCustomer />
            </Route>
            <Route exact path="/listcustomers">
                <AllCustomers  />
            </Route> 

        <Redirect to="/" />      
        </Switch>
        </div>
        )

}
export default Routes;