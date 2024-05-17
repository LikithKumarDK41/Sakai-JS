import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';

import { CommonServices, AuthenticationAuthorizationService } from '@/services';


const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const router = useRouter();

        const [authorized, setAuthorized] = useState(false);

        useEffect(() => {
            setAuthorized(true);
        }, []);

        return <WrappedComponent
            {...props}
            {...{
                authorizedStatus: authorized
            }}
        />
    }
    return Wrapper;
};

export default withAuth;




