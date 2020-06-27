import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import RootLayout from "./layouts/root-layout/RootLayout";
import AuthLayout from "./layouts/auth-layout/AuthLayout";

const AUTHENTICATE = gql`
    query {
        authenticate
    }
`;

const App = (props: any) => {
    const [isLoggedIn, setIsLoggedIn]: any[] = useState();
    return (
        <div className="App">
            <Query query={AUTHENTICATE} onError={(err: any) => setIsLoggedIn(false)} onCompleted={(data: any) => setIsLoggedIn(true)}>
                {(result: any) => {
                    return (
                        <BrowserRouter>
                            {isLoggedIn === false && <AuthLayout />}
                            {isLoggedIn === true && <RootLayout />}
                        </BrowserRouter>
                    );
                }}
            </Query>
        </div>
    );
};

export default App;
