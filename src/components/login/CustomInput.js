import React, { Fragment } from 'react';

export const CustomInput = ({
    input,
    label,
    type,
    maxLength,
    meta: { touched, error }
}) => (
        <Fragment>
            <div className="wrap-input100 validate-input m-b-23">
                <span className="label-input100">{label}</span>
                <input {...input}
                className="input100" 
                type={type}
                name={input.name} 
                maxLength={maxLength}
                placeholder="Type your username" />
                <span className="focus-input100"></span>
            </div>
            {touched &&
                ((error && <p className="error-text" >{error}</p>))}
        </Fragment>)
