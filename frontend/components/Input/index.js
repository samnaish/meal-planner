
export default ({ id }) => {
    return (
        <div className="input">
            <label className="input__label" htmlFor="ingredient">ingredient: {id}</label>
            <input className="imput__box" id="ingredient" type="text" />
            <select className="input__dropbox" name="measurement">
                <option value="none">-</option>
                <option value="grams">g</option>
                <option value="tbsp">tbsp</option>
                <option value="ml">ml</option>
            </select>

            <style jsx>{`

                .input {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                }

            `}</style>
        </div>
        
    );
}