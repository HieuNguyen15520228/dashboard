import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { CustomInput } from './CustomInput'
const LoginForm = props => {
    const { handleSubmit, submitCb,  } = props
    return (
        <React.Fragment>
            <form className="login100-form validate-form" onSubmit={handleSubmit(submitCb)}>
                <span className="login100-form-title p-b-49">
                    Login
                            </span>
                <Field
                    name="email"
                    type="email"
                    label='Email'
                    component={CustomInput}
                />
                <br />
                <br />
                <Field
                    name="password"
                    type="password"
                    label='Password'
                    component={CustomInput}
                />
                <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"></div>
                        <button className="login100-form-btn">
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default reduxForm({
    form: 'loginForm',
    // validate
})(LoginForm)
