import datas from '../data/data.json';
import Card from './card';;
function Cards() {
  
    return (
      <div className="Cards">
        {datas.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            imageURL={data.cover}
            id={data.id}
          />
        ))}
      </div>
    )
  }
  
  export default Cards;
  