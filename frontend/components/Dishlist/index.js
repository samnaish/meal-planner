import DishesData from "../../data/food.json";

const Dish = ({ name, image, servings, cookTime }) => {
    return(
        <div className="dish">
            <strong>
                {name}
            </strong>
            <img className="dish__image" src={image} />
            <div className="dish__info">
                Serves <strong>{servings}</strong> in <strong>{cookTime}</strong>.
            </div>
            <style jsx>
                {`

                    .dish {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }

                    .dish__image {
                        width: 150px;
                        height: 150px;
                        object-fit: cover;
                        border-radius: 50%;
                        margin: 10px;
                    }

                    strong {
                        font-weight: 500;
                    }
                
                `}
            </style>
        </div>
    )
}


export default () => {
    return (
        <div className="dish-list">
            {
                DishesData.slice(0, 2).map((dish, index) => {
                    return (
                        <div key={index} className="dish-list__item">
                            <Dish name={dish.name} image={dish.image} servings={dish.servings} cookTime={dish.time.cook}/>
                        </div>
                    )
                })
            }
            <div className="dish__flex">
                <button className="dish__button"><a className="dish__anchor" href="/recipes">More Meals</a></button>
            </div>
            <style jsx>{`

                .dish-list {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    jusitify-content: center;
                }

                .dish-list__item {
                    width: 50%;
                    min-width: 300px;
                    padding: 10px;
                }

                .dish__flex {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                .dish__button {
                    margin-bottom: 20px;
                    padding: 15px;
                    min-width: 200px;
                    height: 40px;
                    background-color: #cc2936;
                    color: white;
                    text-decoration: none;
                    border: none;
                    font-size: 12px;
                    transition: background 0.3s ease;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 10px;
                }

                .dish__button:hover {
                    opacity: 0.8;
                    background-color: #615d6c;
                }

                .dish__anchor {
                    text-decoration: none;
                    color: black;
                    font-weight: 600;
                }
            
            `}</style>
        </div>
    )
}
