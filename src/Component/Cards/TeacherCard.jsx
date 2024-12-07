import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function TeacherCard({ teacher, swiper }) {
  const { img, name, subject } = teacher;

  const card = (
    <div className="teacher-item">
      <div className="teacher-thumb shadow-lg" style={{borderRadius:'20px'}}>
        <img src={img} alt="" />
        <span>{name}</span>
        {/* <div className="teacher-social">
          <a href="#">
            <i className="social_dribbble"></i>
          </a>
          <a href="#">
            <i className="social_linkedin"></i>
          </a>
          <a href="#">
            <i className="social_vimeo"></i>
          </a>
          <a href="#">
            <i className="social_tumblr"></i>
          </a>
        </div> */}
      </div>
    </div>
  );

  return swiper ? card : <div className="col-lg-3 col-md-6">{card}</div>;
}

TeacherCard.propTypes = {
  teacher: ProtoTypes.object,
  swiper: ProtoTypes.bool,
};

export default TeacherCard;
