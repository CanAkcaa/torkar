function ContactForm() {
  return (
    <form action="#" method="post" className="row">
      <div className="col-md-6">
        <input type="text" name="f-name" placeholder="Adınız" />
      </div>
      <div className="col-md-6">
        <input type="text" name="l-name" placeholder="Soyadınız" />
      </div>
      <div className="col-md-6">
        <input type="email" name="email" placeholder="Email Adresiniz" />
      </div>
      <div className="col-md-6">
        <input type="number" name="phone" placeholder="Telefon Numaranız" />
      </div>
      <div className="col-md-12">
        <input type="text" name="suject" placeholder="Konu" />
      </div>
      <div className="col-md-12">
        <textarea name="message" placeholder="Mesajınız"></textarea>
      </div>
      <div className="col-md-6">
        <div className="condition-check">
          <input id="terms-conditions" type="checkbox" />
          <label htmlFor="terms-conditions">
            Sözleşmeyi Kabul Ediniz <a href="#">Sözleşme</a>
          </label>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <input type="submit" name="submit" value="Mesaj Gönder" />
      </div>
    </form>
  );
}

export default ContactForm;
