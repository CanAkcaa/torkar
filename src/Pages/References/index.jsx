import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import TeacherCard from "../../Component/Cards/TeacherCard";
import GotoTop from "../../Component/GotoTop";
import Header from "../../Component/Headers";
import CertificatesCard from "../../Component/Cards/CertificatesCard";
import ReferencesCard from "../../Component/Cards/ReferencesCard";

function References() {
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
                  <span>Referanslarımız</span> <br/>
                </h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <ReferencesCard
                references={{
                  img: "assets/images/references/references1.png",
                  name: "Abdulkadir Oğulları"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references2.jpg",
                    name: "Ağaoğulları 5"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references3.jpg",
                    name: "Ahmet Mollaoğlu 1"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references4.png",
                    name: "Akgün Balıkçılık 3"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references5.png",
                    name: "Akgün Balıkçılık-A"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references6.png",
                    name: "Aksoy Kardeşler 6"
                }}
              />
              
              <ReferencesCard
                references={{
                    img: "assets/images/references/references7.png",
                    name: "Aktaşlar B-2"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references8.jpg",
                    name: "AS Balıkçılık"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references9.jpg",
                    name: "Atasoy 1"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references10.png",
                    name: "Avcı Baba"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references11.png",
                    name: "Avcı Recebina"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references12.jpg",
                    name: "Azaklar 1"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references13.jpg",
                    name: "Azizler 2"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references14.png",
                    name: "Balıkçı Kral"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references15.png",
                    name: "Başoğlu Balıkçılık 5"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references16.jpg",
                    name: "Berk İsmet"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references17.jpg",
                    name: "Bozoğlu Kardeşler 2"
                }}
              />

             <ReferencesCard
                references={{
                    img: "assets/images/references/references18.jpg",
                    name: "Burak Yağız"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references19.jpg",
                    name: "Burhan Reis-5"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references20.jpg",
                    name: "Cihan Cengiz Karadeniz"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references21.jpg",
                    name: "Çalışkanlar"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references22.png",
                    name: "Çınar İbrahim"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references23.jpg",
                    name: "Coşkun Kardeşler 1"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references24.jpg",
                    name: "Deniz Ana"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references25.jpg",
                    name: "Denizer"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references26.png",
                    name: "Dursun Çınaroğlu"
                }}
              />

              <ReferencesCard
                references={{
                    img: "assets/images/references/references27.jpg",
                    name: "Dursun Kaptan"
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

export default References;
