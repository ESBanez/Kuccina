import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MealCard(props) {
  const { id, title, thumbnail } = props;

  return (
    <>
      <div className="card m-1 p-1" style={{ width: "18rem" }}>
        <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <FontAwesomeIcon icon={faHeart} />
          <Link to={`/meal/${id}`} className="btn btn-primary">
            {" "}
            View Full
          </Link>
        </div>
      </div>
    </>
  );
}

{
  /* <span className="fa-layers fa-fw fa-lg">
  <FontAwesomeIcon icon="fa-solid fa-circle" />
  <FontAwesomeIcon icon="fa-solid fa-check" transform="shrink-6" inverse />
</span> */
}

export default MealCard;
