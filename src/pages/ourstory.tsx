import Carousel from "@/components/Carousel";
import { NextPage } from "next";
import React from "react";
import Image from "next/image";

const OurStory: NextPage = () => {
  const carouselImages = [
    "/images/our_story_page/process_carousel_1.jpg",
    "/images/our_story_page/process_carousel_2.jpg",
    "/images/our_story_page/process_carousel_3.jpg",
    "/images/our_story_page/process_carousel_4.jpg",
    "/images/our_story_page/process_carousel_5.jpg",
  ];

  return (
    <main className="main">
      <div className="our-story-wrapper">
        <div className="our-story-header">Our Story</div>
        <div className="our-story-beginnings">
          began in <span className="bold">Ohrid in 1913</span> <br /> when
          master craftsman{" "}
          <span className="bold">
            Slave <br /> Marinov
          </span>{" "}
          started shaping copper <br /> into high-quality household <br />{" "}
          products.
        </div>
        <Image
          className="copper-pot"
          src="/images/our_story_page/copper_pot.png"
          alt="Copper Pot"
          width={500}
          height={500}
        />
        <div className="oxidate-copper">
          <Image
            className="ohrid"
            src="/images/our_story_page/Ohrid_razglednica_1913.png"
            alt="Ohrid 1913"
            width={500}
            height={500}
          />
          <div className="copper-header">
            Copper <br /> oxidizes and changes over time.
          </div>
          <div className="marinov-copper">And so has Marinov.</div>
          <div className="marinov-copper-desc">
            Over the years, our family business has evolved and <br /> adapted
            to changing times, all <br /> the while holding on to its rich
            history and tradition.
          </div>
        </div>
        <div className="peek-into-process-wrapper">
          <div className="left-text">
            Slave’s skill was passed <br /> down to{" "}
            <span className="bold">his son Ivan,</span> who expanded the
            business <br /> by introducing <br />{" "}
            <span className="bold">souvenirs.</span>
          </div>
          <Image
            className="belt"
            src="/images/our_story_page/belt.png"
            alt="Belt"
            width={500}
            height={500}
          />
          <div className="right-text">
            Following in his father’s <br /> footsteps,{" "}
            <span className="bold">Ivan’s son Slave</span> <br /> created the
            iconic handmade <span className="bold">antique helmet,</span> which
            quickly became a symbol synonymous <br /> with our brand.
          </div>
          <Image
            className="slave"
            src="/images/our_story_page/slave.png"
            alt="Slave"
            width={500}
            height={500}
          />
          <Image
            className="helmet"
            src="/images/our_story_page/helmet.png"
            alt="Helmet"
            width={500}
            height={500}
          />
          <Image
            className="branch-divider"
            src="/images/our_story_page/branch_divider.svg"
            alt="Branch Divider"
            width={500}
            height={500}
          />
          <div className="left-text">
            <span className="bold">Today</span>, Slave’s legacy <br /> carries
            on in the hands <br /> of{" "}
            <span className="bold">
              his daughter Maria and <br /> son Ivan
            </span>
            , marking the{" "}
            <span className="bold">
              fourth <br />
              generation
            </span>{" "}
            of our family&apos;s <br /> timeless craft.
          </div>
          <Image
            className="ring"
            src="/images/our_story_page/ring.png"
            alt="Ring"
            width={500}
            height={500}
          />
          <div className="left-text">
            Under Maria&apos;s <br /> visionary leadership,
            <br /> MARINOV has taken a bold <br /> step forward with a fresh{" "}
            <br /> perspective, exploring <br />{" "}
            <span className="bold">
              unique and modern <br />
              jewelry designs.
            </span>
          </div>
          <Image
            className="bracelet"
            src="/images/our_story_page/bracelet.png"
            alt="Bracelet"
            width={500}
            height={500}
          />
          <div className="right-text">
            Using <span className="bold">traditional techniques</span> <br />{" "}
            taught by her family, she <br /> experiments with new <br />{" "}
            <span className="bold">complementary materials</span> <br /> and
            methods of production,
            <br /> mixing <span className="bold">
              past and present
            </span> <br /> to create timeless pieces <br /> of jewelry.
          </div>
          <div className="bottom-header">Peek Into Our Process</div>
        </div>
        <Carousel images={carouselImages} />
        <div className="crafting-copper-desc">
          Crafting copper jewelry is a meticulous art,<br /> requiring precision,
          honed skill, and a deep <br /> commitment to excellence. Every step, from <br />
          shaping the raw copper to adding intricate <br /> details, demands careful
          attention. <br /><br /><br /> It&apos;s more than creating a piece of jewelry; it&apos;s <br /> a
          dedication to the art, passion, and expertise <br /> that define our work. <br /><br /><br />
          Each finished piece speaks of our <br /> commitment to quality, promising a <br />
          distinctive and beautifully crafted copper <br /> jewelry experience for you.
        </div>
        <div className="certified-craftsmanship-wrapper">
          <div className="certified-craftsmanship-header">
            Certified Craftsmanship
          </div>
          <div className="certified-craftsmanship-first-paragraph">
            Through the years, our business and skilled craftsmen have achieved numerous certifications, showcasing our commitment <br /> to exceptional craftsmanship. We have <br /> actively engaged in international workshops,<br /> demonstrating our craft and learning from <br /> various traditions. 
          </div>
          <div className="wall">
            <div className="certified-craftsmanship-second-paragraph">
              These experiences reflect <br /> our continuous journey <br /> of skill enhancement <br /> and passion for the art,<br /> reinforcing our <br />dedication to quality.
            </div>
            <Image
              className="certificate-one"
              src="/images/our_story_page/certificate_1.jpg"
              alt="Certificate 1"
              width={500}
              height={500}
            />
            <Image
              className="certificate-two"
              src="/images/our_story_page/certificate_2.jpg"
              alt="Certificate 2"
              width={500}
              height={500}
            />
            <Image
              className="certificate-three"
              src="/images/our_story_page/certificate_3.jpg"
              alt="Certificate 3"
              width={500}
              height={500}
            />
            <Image
              className="certificate-four"
              src="/images/our_story_page/certificate_4.jpg"
              alt="Certificate 4"
              width={500}
              height={500}
            />
            <Image
              className="certificate-five"
              src="/images/our_story_page/certificate_5.jpg"
              alt="Certificate 5"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurStory;
