import Navigation from "../Navigation";
import Footer from "../Footer";

export default ({ children }) => {
    return (
        <div>
            <Navigation />
            {children}
            <Footer />
            <style jsx global>{`
                html, body {
                    margin: 0;

                    // make the font weight lighter than normal
                    // set a nicer base font, maybe use system fonts?
                    // maybe make the default font color a slightly lighter black, #222 or #333
                }
            `}</style>
        </div>
    )
}