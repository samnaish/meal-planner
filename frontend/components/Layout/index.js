import Header from "../Navigation";

export default (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}