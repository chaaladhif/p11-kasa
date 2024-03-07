function Card(props){
return(
    <div className="Card">
      <img src={props.imageURL} alt={props.title} />
      <div className="title">{props.title}</div>
  </div>
)
}
export default Card;