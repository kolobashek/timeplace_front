import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom";
import LoginForm from "../../features/auth/loginForm";
import RegisterForm from "../../features/auth/regForm";

export default function Login() {
  const match = useRouteMatch()
  return (
    <div>
        <Switch>
          <Route strict exact path={match.path}>
            <LoginForm />
          </Route>
          <Route path={`${match.path}/register`}>
            <RegisterForm />
          </Route>
        </Switch>
    </div>
  )
}