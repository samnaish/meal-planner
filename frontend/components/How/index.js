
export default ( { subtitle, caption, imageName }) => {
    return (
        <div className="how">
            <span className="how__subtitle">{subtitle}</span>
            <img className="how__img" src={`/static/images/${imageName}`}/>
            <p className="how__caption">{caption}</p>
            <style>{`

                .how {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-width: 250px;
                    width: 33%;
                }

                .how__title {
                    font-size: 26px;
                    display: block;
                    width: 1200px;
                    text-align: center;
                }

                .how__title:before {
                    border: 1px solid back;
                }

                .how__img {
                    border-radius: 50%;
                    height: 150px;
                    width: 150px;
                    margin: 10px;
                    object-fit: cover; 
                }

                .how__caption {
                    text-align: center;
                }

            `}</style>
        </div>
    );
}