/**
 * @copyright 2025 kianpamungkas
 * @license Apache-2.0
 */


/**
 * Node Modules
 */

import ReviewCard from "./ReviewCard";


/**
 * Node Modules
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
   {
      content:
         "This tool is incredibly useful. It handles all the heavy lifting, giving my team more client time.",
      name: "Vanessa Lee",
      imgSrc: "/images/people-1.jpg",
      company: "Peak Performance Sales",
   },
   {
      content:
         "The aesthetic is both beautiful and modern, resulting in a genuine pleasure to interact with daily. The thoughtful, seamless flow makes it truly stand out.",
      name: "Marcus Chen",
      imgSrc: "/images/people-2.jpg",
      company: "Studio Arc Design",
   },
   {
      content:
         "Staff adoption was almost immediate due to the intuitive interface. We found that simple design meant formal training took under ten minutes.",
      name: "Liam Bennett",
      imgSrc: "/images/people-3.jpg",
      company: "Global Talent Solutions",
   },
   {
      content:
         "The system showcases impressive flexibility and adaptability, proving it is not locked into a single methodology. This demonstrates high-value development that serves diverse business needs.",
      name: "Ethan Smith",
      imgSrc: "/images/people-4.jpg",
      company: "Chung & Co. Consulting",
   },
   {
      content:
         "Flawless execution. It operates instantly, meeting all our aggressive reliability standards.",
      name: "Chloe Vance",
      imgSrc: "/images/people-5.jpg",
      company: "Apex Industries",
   },
   {
      content:
         "Data integrity is perfect, which is absolutely critical for our finance team. We pushed the system under peak load and achieved zero functional errors.",
      name: "David Chung",
      imgSrc: "/images/people-6.jpg",
      company: "Financial Integrity Group",
   },
];

const Review = () => {
   useGSAP(() => {
      gsap.to(".scrub-slide", {
         scrollTrigger: {
            trigger: ".scrub-slide",
            start: "-200 80%",
            end: "400% 80%",
            scrub: true,
         },
         x: "-1000",
      });
   });
   return (
      <section id="reviews" className="section overflow-hidden">
         <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
               What our customers say
            </h2>

            <div className="flex items-stretch gap-3 w-fit scrub-slide">
               {reviews.map(({ content, name, imgSrc, company }) => (
                  <ReviewCard
                     content={content}
                     imgSrc={imgSrc}
                     name={name}
                     company={company}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Review;
