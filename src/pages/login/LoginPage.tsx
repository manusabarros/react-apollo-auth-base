import React from "react";
import "./LoginPage.scss";
import gql from "graphql-tag";
import { useLazyQuery } from "react-apollo";

const LoginPage = (props: any) => {
    const LOGIN = gql`
        query {
            login(input: { username: "manusabarros", password: "manusabaadmin" })
        }
    `;

    const GET_USERS = gql`
        query {
            getUsers {
                id
                username
                firstName
                lastName
                roleId
            }
        }
    `;

    const [login, loginResp] = useLazyQuery(LOGIN);
    const [getUsers, getUsersResp] = useLazyQuery(GET_USERS);

    if (loginResp.loading) console.log("Loading!");
    if (loginResp.error) console.log(loginResp.error);
    if (loginResp.data) console.log(loginResp.data);

    if (getUsersResp.loading) console.log("Loading!");
    if (getUsersResp.error) console.log(getUsersResp.error);
    if (getUsersResp.data) console.log(getUsersResp.data);

    return (
        <div className="LoginPage">
            <h1>Login</h1>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    login();
                }}
            >
                Login
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    getUsers();
                }}
            >
                Get Users
            </button>
        </div>
    );
};

export default LoginPage;
