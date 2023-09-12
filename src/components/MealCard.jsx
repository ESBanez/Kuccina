import { Link } from "react-router-dom";

function MealCard(props) {
  const { id, title, thumbnail } = props;
  return (
    <>
      <div className="card m-1 p-1" style={{ width: "18rem" }}>
        <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={`/meal/${id}`} type="button" className="btn btn-dark">
            View Full Recipe
          </Link>
        </div>
      </div>
    </>
  );
}

export default MealCard;
