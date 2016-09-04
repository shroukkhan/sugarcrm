import * as LoginState from './LoginState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
const t = require('tcomb-form-native');
let Form = t.form.Form
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native';

const LoginView = React.createClass({
    propTypes: {
        username: PropTypes.string,
        password: PropTypes.string,
        value: PropTypes.object,
        loading: PropTypes.bool,
        dispatch: PropTypes.func.isRequired
    },
    increment() {
        this.props.dispatch(LoginState.increment());
    },
    reset() {
        this.props.dispatch(LoginState.reset());
    },
    random() {
        this.props.dispatch(LoginState.random());
    },
    bored() {
        this.props.dispatch(NavigationState.pushRoute({
            key: 'Color',
            title: 'Color Screen'
        }));
    },


    render() {

        let options = {
            fields: {
            }
        };

        let username = {
            label: 'username',
            maxLength: 12,
            editable:true,
            hasError: false,
            error: ''
        };
        let password = {
            label: 'Password',
            maxLength: 12,
            secureTextEntry: true,
            editable:true,
            hasError: false,
            error: ''
        };

        var loginForm = t.struct({
            username: t.String,
            password: t.String
        });
        options.fields['username'] = username;
        options.fields['username'].placeholder = 'username';
        options.fields['username'].autoCapitalize = 'none';
        options.fields['password'] = password;
        options.fields['password'].placeholder ='password';

        return (
            <Form ref='form'
                  type={loginForm}
                  options={options}
            />
        );
    }
});


export default LoginView;
