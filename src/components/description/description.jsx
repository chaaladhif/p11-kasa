import "./description.scss";
function Description({ title, location }) {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <h2>{location}</h2>
            </div>
        </>
    );
}
export default Description;
