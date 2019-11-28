import React from 'react'
import { Route } from 'reac-router-dom'
import useAuthCheck from '../../hooks/authHandling'
import Login from '../auth/Login'

const AuthCheckRoute = ({path, Destination}) => {
    //object destructuring- useAuthCheck
    //properties get assigned to the variables on the left
    //order doesn't matter but the const must match the property
    const { isAuthenticated } = useAuthCheck()

    return(
        <Route exact path={path} render=
        {props => {
            if (isAuthenticated())
            {
                return <Destination
                {...props} />
            }
            else
            {
                return <Login />
            }
        }} />
    )
}