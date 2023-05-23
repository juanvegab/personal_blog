import { HeroImage } from "../../components/HeroImage";

const Contact = () => {

  return (
    <div className="page-contact">
      <h1>We'd love to hear from you</h1>
      <p>We have a team waiting to help you anytime.</p>
      <HeroImage imageURL="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?fit=crop&w=1200&h=600" altText="phone" />
      <div className="contact-links">
        <div>
          <h2>Support</h2>
          <p>Our team is here to help!</p>
          <a href="mailto:support@test.com">support@test.com</a>
        </div>
        <div>
          <h2>Email</h2>
          <p>You can contact us via email</p>
          <a href="mailto:test@test.com">test@test.com</a>
        </div>
        <div>
          <h2>Phone</h2>
          <p>Mon - Fri from 8am to 5pm GMT-6</p>
          <a href="tel:+50670123940">+506 7012 3940</a>
        </div>
      </div>
    </div>
  );
}

export { Contact };