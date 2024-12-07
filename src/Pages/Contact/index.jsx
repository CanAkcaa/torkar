import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import ContactForm from "../../Component/Form/ContactForm";
import Map from "../../Component/Map";
import GotoTop from "../../Component/GotoTop";

function Contact() {
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
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact--info-area">
                  {/* <h3>Get in touch</h3>
                  <p>
                    Looking for help? Fill the form and start a new adventure.
                  </p> */}
                  <div className="single-info">
                    <h5>Adres</h5>
                    <p>
                      <i className="icon_house_alt"></i>
                      Fulya Mah. Ortaklar Cad. Nur Apt. No: 11/3 Mecidiyeköy 34394 Şişli/İSTANBUL
                      <br />
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Telefon</h5>
                    <p>
                      <i className="icon_phone"></i>
                      Telefon: (+90) 212 217 97 47 <br/>
                      Faks: (+90) 212 217 97 45 <br/>
                      Gsm: (+90) 532 296 07 13
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Email</h5>
                    <p>
                      <i className="icon_mail_alt"></i>
                      torkarmarin@dposta.net
                      <br />
                      info@torkarmarin.com
                    </p>
                  </div>
                  {/* <div className="ab-social">
                    <h5>Follow Us</h5>
                    <a className="fac" href="#">
                      <i className="social_facebook"></i>
                    </a>
                    <a className="twi" href="#">
                      <i className="social_twitter"></i>
                    </a>
                    <a className="you" href="#">
                      <i className="social_youtube"></i>
                    </a>
                    <a className="lin" href="#">
                      <i className="social_linkedin"></i>
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact-form">
                  <h4>İletişime Geçin</h4>
                  <p>
                    İletişim Formu
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Map />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Contact;
