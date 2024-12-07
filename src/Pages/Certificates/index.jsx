import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import TeacherCard from "../../Component/Cards/TeacherCard";
import GotoTop from "../../Component/GotoTop";
import Header from "../../Component/Headers";
import CertificatesCard from "../../Component/Cards/CertificatesCard";

function Certificates() {
  const [isLoading, setIsLoading] = useState(true);
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Header
          className="header-02"
          logo="assets/images/logo2.png"
          search={true}
        />
        <section className="instructor-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-15">
                  <span>Sertifikalarımız</span> <br/>
                </h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <CertificatesCard
                certificates={{
                  img: "assets/images/sertifika1.jpg",
                  name: "Sonic Corporation"
                }}
              />

              <CertificatesCard
                certificates={{
                  img: "assets/images/sertifika2.jpg",
                  name: "Sonic Corporation"
                }}
              />

              <CertificatesCard
                certificates={{
                  img: "assets/images/sertifika3.png",
                  name: "Sonic Corporation"
                }}
              />

              <CertificatesCard
                certificates={{
                  img: "assets/images/sertifika4.jpg",
                  name: "Suzuki Fish Finder Co.Ltd."
                }}
              />

              <CertificatesCard
                certificates={{
                  img: "assets/images/sertifika5.jpg",
                  name: "Suzuki Fish Finder Co.Ltd."
                }}
              />

              <CertificatesCard
                certificates={{
                  img: "assets/images/sertifika6.png",
                  name: "Koden"
                }}
              />

            </div>
          </div>
        </section>
        <Footer getStart={false} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Certificates;
