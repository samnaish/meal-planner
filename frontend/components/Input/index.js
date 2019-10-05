
export default ({ id }) => {
    const elId = `input-${id}`;
    return (
        <div className="input">
            <div className="input__ingredient">
                <label htmlFor={elId} className="input__label" >Ingredient: {id}</label>
                <input id={elId} className="input__box" type="text" />
            </div>
            <div className="input__measurement">
                <label id={elId} className="input__label">Unit: </label>
                <select className="input__box" name="measurement">
                    <option value="none">-</option>
                    <option value="grams">Grams</option>
                    <option value="tbsp">TBSP</option>
                    <option value="ml">ML</option>
                </select>
            </div> 

            <style jsx>{`

                .input {
                    padding: 10px 0;
                    margin: 5px 10px;
                    flex-wrap: wrap;
                }

                .input__label {
                    display: inline-block;
                    min-width: 100px;
                    margin: 10px 0;
                }

                .input__box {
                    height: 30px;
                    min-width: 200px;
                    padding: 5px;
                    border: 1px solid lightgrey;
                    border-radius: 4px;
                    transition: border-color 0.3s ease;
                }

                @media screen and (max-width: 450px) {
                    
                    .input__ingredient {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .input__measurement {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .input__label {
                        text-align: center;
                    }
                }

                

            `}</style>
        </div>
        
    );
}