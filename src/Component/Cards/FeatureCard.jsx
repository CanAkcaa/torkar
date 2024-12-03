import Prototypes from "prop-types";
import { Link } from "react-router-dom";

function FeatureCard({ course }) {
  const {
    title,
    heading,
    lesson,
    student,
    img,
    reviews,
    rating,
    price,
    offerPrice,
    author,
    courseLink,
  } = course;
  return (
    <div
      className="col-lg-4 col-md-6 shaf-item"
      data-groups='["all", "science"]'
    >
<div class="card" style={{width: '18rem'}}>
  <img class="card-img-top" style={{width:'100%', height:'214px'}} src={img} alt="Card image cap"/>
</div>
    </div>
  );
}

FeatureCard.propTypes = {
  course: Prototypes.object.isRequired,
};

export default FeatureCard;
