
export default ( { subtitle, caption, imageName }) => {
    return (
        <div className="how">
            <span className="how__subtitle">{subtitle}</span>
            <img className="how__img" src={`https://img.icons8.com/ios/60/000000/${imageName}`}/>
            <p className="how__caption">{caption}</p>
            <style>{`

                .how {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-width: 250px;
                    width: 50%;
                    outline: 1px solid black;
                }

                .how__title {
                    font-size: 26px;
                    display: block;
                    width: 1200px;
                    padding: 10px;
                    text-align: center;
                }

                .how__subtitle {
                    font-size: 24px;
                    margin: 10px;
                }

                .how__title::before, .how__title::after {
                    content: '';
                    border: 1px solid black;
                }

                .how__title::before {
                    margin-right: 10px;
                }

                .how__title::after {
                    margin-left: 10px;
                }

                .how__img {
                    height: 60px;
                    width: 60px;
                    margin: 10px;
                    object-fit: cover;
                    padding: 10px; 
                }

                .how__caption {
                    text-align: center;
                }

            `}</style>
        </div>
    );
}