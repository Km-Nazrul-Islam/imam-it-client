import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Spinner from 'react-bootstrap/Spinner';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner className='' animation="border" variant="primary" />
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivetRoute;