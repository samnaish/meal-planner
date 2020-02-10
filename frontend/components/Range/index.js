import React, { forwardRef, Fragment} from 'react';

const Range = forwardRef(({name, min, max, step}, ref) => {
    return (
        <Fragment>
            <input name={name} type="range" min={min} max={max} step={step} ref={ref}/>
            <style jsx>{`

                input[type="range"] {
                    -webkit-appearance: none;
                    margin: 30px 0;
                    min-width: 240px;
                    color: #222;
                }

                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    background: #CCC;
                    border: 1px solid #BBB;
                    height: 30px;
                    width: 30px;
                    cursor: pointer;
                    border-radius: 3px;
                    margin-top: -15px;
                }

                input[type="range"]::-webkit-slider-runnable-track {
                    height: 10px;
                    background: #666;
                    cursor: pointer;
                    border: 1px solid #444;
                    border-radius: 3px;
                }

                input[type="range"]::before {
                    content: attr(min);
                    margin-right: 10px;
                    font-size: 14px;
                }

                input[type="range"]::after {
                    content: attr(max);
                    margin-left: 10px;
                    font-size: 14px;
                }

            `}</style>
        </Fragment>

    )
});

export default Range;