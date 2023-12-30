import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl my-20  mx-auto px-8 flex flex-col gap-20">
      <div className="flex flex-col gap-10 mb-10">
        <h1 className="text-center md:text-4xl text-2xl  font-bold">
          About Admire Holidays
        </h1>
        <p>
          We Admire Holidays are here to help you explore this beautiful world
          we live in. Our travel & tourism services will ensure seamless travel.
          We have been providing our travel-related services to various
          companies and customers for more than the past 7 years. You can be
          stress-free and enjoy flawless travel services from us.
        </p>
        <p>
          We cover many destinations throughout the country and the world.
          including beautiful Indian destinations such as palm-lined, white-sand
          beaches; mangroves and tropical rainforests of Andaman and Nicobar;
          lush green valleys and glistering lakes in the north Indian states;
          magnificent mountains and hills of the northeast Indian states; and
          tropical beauty, exotic locales, and tranquil backwaters of the south
          Indian states.
        </p>
        <p>
          We also cover various international destinations like scenic views,
          ancient temples, and vibrant nightlife of Thailand; incredible
          architecture and futuristic attractions in Singapore; colonial
          architecture, thriving modern cities, and beautiful beaches of
          Malaysia; the beauty of the Gulf in Dubai; and various destinations in
          Europe
        </p>
      </div>
      <div className="flex justify-center  md:flex-row flex-col items-center gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="md:text-4xl text-2xl text-red-700 font-bold">
            Mission
          </h1>
          <p>
            Our mission is to help people explore the world. We are committed to
            providing you with all kinds of travel and tourism related services.
            We take pride in exceeding our client’s expectations about our
            services. Your satisfaction and excellent service are our main
            goals, while also providing the best value for your hard-earned
            money.
          </p>
        </div>
        <img
          src="https://admireholidays.com/wp-content/uploads/2023/08/2-2-plane-png-clipart-scaled-e1691893367783-1024x601.jpeg"
          className="lg:w-[500px] md:w-[350px]"
          alt=""
        />
      </div>
      <div className="flex justify-center md:flex-row flex-col-reverse items-center gap-8">
        <img
          src="https://admireholidays.com/wp-content/uploads/2023/08/top-viewthe-business-team-shows-its-unity_252847-33933-removebg-preview.png"
          className="lg:w-[500px] md:w-[350px]"
          alt=""
        />
        <div className="flex flex-col gap-8">
          <h1 className="md:text-4xl text-2xl text-red-700 font-bold">
            Vision
          </h1>
          <p>
            We strive to provide the best business travel services, making your
            dream destinations feel near you. We are committed to providing you
            with the best travel experience you can ever have. Our company aims
            to provide best-in-class personalized travel management services to
            our customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
