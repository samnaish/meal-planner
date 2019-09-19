import Navigation from "../Navigation";
import Footer from "../Footer";

export default ({ children }) => {
    return (
        <div>
            <Navigation />
            {children}
            <Footer />
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }

                html, body {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: 16px;
                    height: 100%;
                    color: #222;
                }
            `}</style>
        </div>
    )
}