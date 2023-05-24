import { HeroImage } from "../../components/HeroImage";

const Contact = () => {

  return (
    <div className="text-neutral-600">
      <h1 className="text-4xl font-semibold text-center my-4">We'd love to hear from you</h1>
      <p className="text-center my-4 leading-8">We have a team waiting to help you anytime.</p>
      <HeroImage imageURL="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?fit=crop&crop=focalpoint&fp-y=.570&w=800&h=400&q=80" altText="phone" />
      <div className="flex flex-row justify-between mx-14 leading-10 mt-6 mb-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">Support</h2>
          <p>Our team is here to help!</p>
          <a className="text-purple-800 text-lg" href="mailto:support@test.com">support@test.com</a>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p>You can contact us via email</p>
          <a className="text-purple-800 text-lg" href="mailto:test@test.com">test@test.com</a>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p>Mon - Fri from 8am to 5pm GMT-6</p>
          <a className="text-purple-800 text-lg" href="tel:+50670123940">+506 7012 3940</a>
        </div>
      </div>
    </div>
  );
}

export { Contact };