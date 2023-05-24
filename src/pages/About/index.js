import { HeroImage } from "../../components/HeroImage";

const About = () => {

  return (
<div className="text-neutral-600">
      <h1 className="text-4xl font-semibold text-center my-4">Discover Our Story</h1>
      <p className="text-center my-4 leading-8">Unveiling the Essence Behind Our Journey</p>
      <HeroImage imageURL="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?fit=crop&w=800&h=400&q=80" altText="phone" />
      <div className="my-20 max-w-3xl mx-auto">
        <p>"Unveiling the World's Wonders: Join Our Captivating Blog for a Journey of Discovery, Learning, and Exploration"</p>
        <br />
        <p>Welcome to our captivating blog where we uncover the hidden treasures of the world. Join us on a journey of discovery, learning, and exploration as we delve into intriguing travel destinations, thought-provoking articles, and captivating imagery.</p>
        <br />
        <p>Immerse yourself in rich narratives, thought-provoking discussions, and stunning visuals as we bring you stories that inspire, educate, and ignite your sense of wonder.</p>
        <br />
        <p>Subscribe to our newsletter and follow us on social media to stay updated with our latest posts, special features, and exclusive offers. Embark on an unforgettable adventure with our blog and explore the endless possibilities that await.</p>
        <br />
        <p>Discover, learn, and explore with our captivating blog the gateway to a world of wonders</p>
      </div>
    </div>
  );
}

export { About };