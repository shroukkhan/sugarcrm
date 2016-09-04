/*eslint-disable react/prop-types*/

import React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
import ColorViewContainer from './colors/ColorViewContainer';
import LoginViewContainer from './login/LoginViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
    const key = props.scene.route.key;
    if (key == 'Login') {
        return <LoginViewContainer/>
    }
    if (key === 'Counter') {
        return <CounterViewContainer />;
    }

    if (key.indexOf('Color') === 0) {
        const index = props.scenes.indexOf(props.scene);
        return (
            <ColorViewContainer
                index={index}
            />
        );
    }

    throw new Error('Unknown navigation key: ' + key);
}
