import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Layout from '../components/Layout';

const EmailUser = () => {
    const { register, handleSubmit, errors } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const sendUserEmail = (data) => {
        // get the email property
        // send to some api
        // show message to user
        console.log("We should reset", data.email);
        setSubmitted(true);
    }

    return (
        <Layout>
            <h3>Password Reset</h3>
            {
                submitted ? (
                    <div>data sent</div>
                ) : (
                    <form onSubmit={handleSubmit(sendUserEmail)}>
                        <label>Email: </label>
                        <input type="email" name="email" required={true} ref={register}/>
                        { errors.email && <span>Invalid email.</span> }
                        <button type="submit">Submit</button>
                    </form>
                )
            }
            
        </Layout>
    )
}

export default EmailUser;