import React, { Fragment, forwardRef } from 'react';

const Checkbox = forwardRef(({ name, label }, ref ) => {

    const inputType = "checkbox";
    const emptyString = "";
    
    return (
        <Fragment>
            <div className="check">
                <label className="check__label" htmlFor={name}>{label}</label>
                <input type={inputType} id={name} name={name} ref={ref}/>
            </div>
            <style>{`

                .check {
                    display: block;
                    margin: 10px auto;
                }

                input[type=${inputType}] {
                    position: absolute;
                    height: 20px;
                    width: 20px;
                    border: 1px solid #387D7A;
                }

                input[type=${inputType}] + .check__label {
                    position: relative;
                    padding: 3px 0 0 40px;
                    cursor: pointer;
                }

                input[type=${inputType}]:before {
                    content: ${emptyString};
                    background: #fff;
                    border: 1px solid #387D7A;
                    border-radius: 5px;
                    height: 20px;
                    width: 20px;
                }

                .check__label {
                    cursor: pointer;
                }

            `}</style>
        </Fragment>
    )
});

export default Checkbox;