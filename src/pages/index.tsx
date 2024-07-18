import Head from "next/head";
import Lottie from "lottie-react";
import braceletAnimation from "../../public/images/home_page/bracelet_animation.json";
import beeAnimation from "../../public/images/home_page/bee_animation.json";
import helmetAnimation from "../../public/images/home_page/helmet_animation.json";
import Testimonial from "@/components/Testimonial";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const type = e.currentTarget.getAttribute("data-type");

    router.push({
      pathname: "/productsPage",
      query: {
        type,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home-page-container main-header">
        <section className="hero-section">
          <Lottie
            animationData={braceletAnimation}
            loop={true}
            className="home-bracelet-container"
          />
          <div className="bracelet-heading">
            <h2>Unique Handcrafted Jewelry</h2>
            <Link onClick={handleClick} href="/productsPage" data-type="jewelry">
              Shop Now
            </Link>
          </div>
        </section>
        <section className="hero-section bee-section">
          <Lottie
            animationData={beeAnimation}
            loop={true}
            className="home-bee-container"
          />
          <div className="bee-heading">
            <h2>Custom Made Orders</h2>
            <Link href="/customOrders">Order Now</Link>
          </div>
        </section>
        <section className="hero-section">
          <Lottie
            animationData={helmetAnimation}
            loop={true}
            className="home-helmet-container"
          />
          <div className="helmet-heading">
            <h2>Exceptional Home Decor</h2>
            <Link onClick={handleClick} href="/productsPage" data-type="decor">
              Discover
            </Link>
          </div>
        </section>
        <section className="always-unique-section sections">
          <div className="container">
            <div className="always-unique-heading">
              <h2>Always unique, never exactly the same!</h2>
              <p>
                Each piece is Handcrafted with meticulous attention to detail in
                our workshop in Ohrid.
              </p>
            </div>
          </div>
        </section>
        <section className="century-old-container sections">
          <div className="img-container">
            <img
              src="/images/home_page/Ohrid_razglednica_1913.png"
              alt="picture of ohrid old town"
            />
          </div>
          <div className="container">
            <div className="century-old-heading">
              <h2>Over a century old tradition</h2>
              <p>
                As time unfolds, our family business has been growing and
                evolving, adapting to the changing tides while remaining rooted
                in our heritage.
              </p>
              <Link href="/">See Our Story</Link>
            </div>
          </div>
        </section>
        <div className="separator">
          <img
            src="/images/home_page/dot_3px.svg"
            alt="dot separator"
            className="dot-divider"
          />
          <img
            src="/images/home_page/dot_3px.svg"
            alt="dot separator"
            className="dot-divider"
          />
          <img
            src="/images/home_page/dot_3px.svg"
            alt="dot separator"
            className="dot-divider"
          />
          <img
            src="/images/home_page/dot_3px.svg"
            alt="dot separator"
            className="dot-divider"
          />
          <img
            src="/images/home_page/dot_3px.svg"
            alt="dot separator"
            className="dot-divider"
          />
          <img
            src="/images/home_page/dot_3px.svg"
            alt="dot separator"
            className="dot-divider"
          />
          <img
            src="/images/home_page/butterfly_divider.svg"
            alt="butterfly separator"
            className="butterfly-divider"
          />
          <img
            src="/images/home_page/dot_3px.svg"
            alt="dot separator"
            className="dot-divider"
          />
        </div>
        <section className="visit-section sections">
          <div className="visit-section-heading">
            <div className="visit-section-heading-container">
              <h2>Visit Our Shop</h2>
              <p>
                Come meet us at the heart of Ohrid&rsquo;s old town and
                experience the art of craftmanship firsthand!
              </p>
              <Link href="/">Contact Details</Link>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="container">
            <h2>What Our Clients Say</h2>
            <Testimonial
              quote={`I stumbled upon Marinov during my trip to Ohrid, and I'm so glad I did. Their shop is a hidden gem filled with beautifully handcrafted copper pieces. I bought a pair of earrings, and every time I wear them, I receive compliments. The unique designs and the warmth of the staff make Marinov an unforgettable experience. Highly recommended!`}
              cite="Elsa Johansson"
              country="Sweden"
            />
            <div className="divider d-flex justify-content-center">
              <img
                src="/images/home_page/leaf_divider.svg"
                alt="leaf divider"
              />
            </div>
            <Testimonial
              quote={`I recently purchased a copper necklace from Marinov, and I couldn't be happier with my choice. The craftsmanship is impeccable, and the attention to detail is evident in every link. The necklace not only complements my style perfectly but also garners admiration wherever I go. Marinov's jewelry isn't just an accessory; it's a work of art that adds elegance to any outfit. I'm genuinely impressed and will definitely be returning for more pieces!`}
              cite="Sofia Oliveira"
              country="Portugal"
            />
            <div className="divider d-flex justify-content-center">
              <img
                src="/images/home_page/leaf_divider.svg"
                className="rotated"
                alt="leaf divider"
              />
            </div>
            <Testimonial
              quote={`Marinov's copper products reflect the essence of Ohrid's rich heritage. I ordered a custom-made copper lamp for my home, and it exceeded my expectations. The team at Marinov went above and beyond to ensure every detail was perfect. Their dedication to preserving tradition while creating modern masterpieces is truly commendable. I am immensely satisfied with my purchase!`}
              cite="Matthias Schneider"
              country="Austria"
            />
          </div>
        </section>
      </main>
    </>
  );
}
