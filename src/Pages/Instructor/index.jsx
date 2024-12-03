import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import TeacherCard from "../../Component/Cards/TeacherCard";
import GotoTop from "../../Component/GotoTop";
import Header from "../../Component/Headers";

function Instructor() {
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
                  <span>Geçmişten Günümüze</span> <br/> Medium Frequency Full Scanning Sonar
                </h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday1.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday2.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday3.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday4.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday5.png",
                }}
              />


            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-15"> Low Frequency Full Scanning Sonar
                </h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday6.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday7.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday8.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday9.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday10.png",
                }}
              />


            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-15"> High Frequency Half Scanning Sonar
                </h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday11.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday12.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday13.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday14.png",
                }}
              />

            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-15"> High Frequency Full Scanning Sonar
                </h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday15.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday16.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday17.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday18.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday19.png",
                }}
              />

            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-15"> SUPER SONAR
                </h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday20.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday21.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday22.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday23.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday24.png",
                }}
              />

            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-15">Doppler Current Meter
                </h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday25.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday26.jpg",
                }}
              />

            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-15">Fish Sizing Echo Sounder
                </h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday27.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday28.jpg",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/fromPastToday29.png",
                }}
              />

            </div>
          </div>
        </section>
        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Instructor;
