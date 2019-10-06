
export default () => {
    return (
        <div className="about">
            <div className="about__content">
                <img className="about__logo" src="../static/images/logos/logo.png"/>
                <p className="about__text">Here at Meal Planner, we believe in collecting and sharing recipes from all over the world. Although out list is small and limited at the moment, we aim to keep increasing that number to a comfortable standard. The best thing about our service is; anyone can contribute a recipe of any kind of dish, whether starter, main, or dessert.</p>
            </div>
            <style jsx>{`
            
                .about {

                }

                .about__content {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }

                .about__logo {
                    margin: 15px 0;
                }

                .about__text {
                    margin: 0 5px;
                    width: 80%;
                }

                @media srceen and (max-width: 540px) {
                    .about__content {
                        flex-wrap: wrap;
                        width: 50%;
                    }

                } 

            `}</style>
        </div>
    );
}