import "./tag.scss";
function Tag({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <button className="tags__button" key={index}>
                    {tag}
                </button>
            ))}
        </div>
    );
}
export default Tag;
