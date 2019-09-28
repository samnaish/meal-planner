
export default ({ name, passage }) => {
    return (
        <div className="user-post">
            <img className="user-post__image" src="https://img.icons8.com/ios/50/000000/user.png"/>
            <div className="user-post__content">
                <h3 className="user-post__name">{name}</h3>
                <p className="user-post__passage">{passage}</p>
            </div>
            <style jsx>{`

                .user-post {
                    background-color: #EBDCCB;
                    display: flex;
                    flex-direction: row;
                    border: 1px solid lightgrey;
                    align-items: center;
                }

                .user-post__image {
                    width: 40px;
                    height: 40px;
                }

                .user-post__content {
                    display: flex;
                    flex-direction: column;
                }

                .user-post__name {
                    margin: 5px 0 5px 10px;
                    font-size: 14px;
                }

                .user-post__passage {
                    margin: 5px 0 0 0;
                    padding: 0 5px 5px 10px;
                    font-size: 13px
                }

            
            `}</style>
        </div>
    );
}