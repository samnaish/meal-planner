
export default () => {
    return (
        <footer className="footer">
            <p className="footer__caption">Developed by <a className="footer__anchor" href="https://github.com/samnaish">Sam Naish</a></p>
            <style>{`

                .footer {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                .footer__anchor {
                    text-decoration: none;
                    color: black;
                }

                .footer__anchor:hover {
                    color: darkgrey;
                }
            
            `}</style>
        </footer>
    );
}