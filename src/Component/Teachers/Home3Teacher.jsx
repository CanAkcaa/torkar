import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import Home3TeacherCard from "../Cards/Home3TeacherCard";

function Home3Teacher({ className, btnClass }) {
  return (
    <section className={className ? className : "teachers-section-2"}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title mb-15">
              Ürünler
            </h2>
          </div>
        </div>
        <div className="row">
          <Home3TeacherCard
            img="assets/images/product1.png"
            name="Dianne Ameter"
            position="Illustrator"
          />
          <Home3TeacherCard
            img="assets/images/product2.png"
            name="Hugh Saturation"
            position="Photographer"
          />
          <Home3TeacherCard
            img="assets/images/product3.png"
            name="Jim Séchen"
            position="Stylist & Author"
          />
          <Home3TeacherCard
            img="assets/images/product4.png"
            name="Eric Widget"
            position="Designer"
          />
          <Home3TeacherCard
            img="assets/images/product5.png"
            name="Jim Séchen"
            position="Stylist & Author"
          />
          <Home3TeacherCard
            img="assets/images/product6.png"
            name="Eric Widget"
            position="Designer"
          />
        </div>
      </div>
    </section>
  );
}

Home3Teacher.propTypes = {
  className: ProtoTypes.string,
  btnClass: ProtoTypes.string,
};

export default Home3Teacher;
