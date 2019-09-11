import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default () => {
    return (
        <div>
            <Navigation />
            <div className="welcome-splash">
                <h1 className="welcome-splash__caption">Welcome</h1>
            </div>
            <div className="reason">
                
            </div>
            <div className="">

            </div>
            <Footer />
            <style>{`

                body {
                    margin: 0;
                    padding: 0;
                }
            
                .welcome-splash {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #615d6c;
                    width: 100%;
                    height: 400px;
                }

            `}</style>
        </div>
        
    )
}

