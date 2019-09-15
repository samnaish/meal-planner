
export default ({ title, caption, imageName }) => {
    return(
        <div className="reason">
            <h3 className="reason__title">{title}</h3>
            <span className="reason__caption">{caption}</span>
            <img className="reason__img" src={`/static/images/${imageName}`} />
            <style>{`

                .reason {
                    margin: 1px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-width: 250px;
                    width: 33%;
                }

                .reason__title {
                    text-align: center;
                }

                .reason__caption {
                    text-align: center;
                }

                .reason__img {
                    border-radius: 50%;
                    height: 150px;
                    width: 150px;
                    margin: 10px;
                    object-fit: cover;
                }

            `}</style>
        </div>
    )
}