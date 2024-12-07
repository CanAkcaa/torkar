import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function CertificatesCard({ certificates, swiper }) {
  const { img, name, subject } = certificates;

  const card = (
    <div className="teacher-item">
      <div className="teacher-thumb shadow-lg" style={{borderRadius:'20px'}}>
        <img style={{width:'100%', height:'300px'}} src={img} alt="" />
        <p style={{fontWeight:'bold'}}>{name}</p>
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

CertificatesCard.propTypes = {
  certificates: ProtoTypes.object,
  swiper: ProtoTypes.bool,
};

export default CertificatesCard;
