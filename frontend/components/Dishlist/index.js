import DishesData from "../../data/food.json";

const Dish = ({ name, servings, cookTime }) => {
    return(
        <div className="dish">
            <div className="dish__name">
                {name}
            </div>
            <div className="dish__info">
                Serves <strong>{servings}</strong> in <strong>{cookTime}</strong>.
            </div>
            <style jsx>
                {`
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
                            <Dish name={dish.name} servings={dish.servings} cookTime={dish.time.cook}/>
                        </div>
                    )
                })
            }
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
            
            `}</style>
        </div>
    )
}
