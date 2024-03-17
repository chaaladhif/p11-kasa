import "./user.scss";
function User({ hostname, hostpicture }) {
    return (
        <div className="user">
            <h3>{hostname}</h3>
            <img className="badge" src={hostpicture} alt="badge" />
        </div>
    );
}
export default User;
