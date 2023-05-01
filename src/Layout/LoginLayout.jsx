import React from 'react';
import { Outlet } from 'react-router-dom';
import NevigationBar from '../Pages/Shared/NevigationBar';

const LoginLayout = () => {
    return (
        <div>
            <NevigationBar></NevigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;