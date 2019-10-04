import Layout from "../Layout";
import Input from "../Input";

export default () => {
      return (
        <Layout>
            
            <div className="submit">
                <form className="submit__form">
                    <div>
                        <div className="submit__header">
                            <label className="submit__name" >Dish Name</label>
                            <input className="submit__name-input" type="text" />
                        </div>
                        <div className="">
                            <label className="submit__label" >How many Ingredients? </label>
                            <input className="submit__input" type="number" />
                        </div>
                    </div>
                    <div className="submit__inputs-container">
                        <div>
                            <Input id="1"/>
                            <Input id="2"/>
                            <Input id="3"/>
                            <Input id="4"/>
                            <Input id="5"/>
                            <Input id="6"/>
                        </div>
                        <div>
                            <Input id="7"/>
                            <Input id="8"/>
                            <Input id="9"/>
                            <Input id="10"/>
                            <Input id="11"/>
                            <Input id="12"/>
                        </div>
                    </div>
                    <div className="submit__button-container">
                        <button className="submit__button">Submit!</button>
                    </div>
                </form>
            </div>
            <style jsx>{`
            
                .submit {
                    background-color: #cc2936;
                    width: 500px;
                    margin: 20px auto;
                    padding: 50px;
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                    border-radius: 10px;  
                }

                .submit__header {
                    display: flex;
                    flex-direction: column;
                }

                .submit__input {
                    width: 10%;
                }

                .submit__inputs-container {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                }

                .submit__button-container {
                    display: flex:
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .submit__button {
                    
                    padding: 10px;
                    margin: 10px auto;
                }

            
            `}</style>
        </Layout>
      );
    }
