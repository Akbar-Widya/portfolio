/**
 * @copyright 2025 akbarwidya
 * @license Apache-2.0
 */


/**
 * Node Modules
 */

import ProjectCard from "./ProjectCard";

const works = [
   {
      imgSrc: "/images/project-1.jpg",
      title: "Travel Agency Dashboard",
      tags: ["API", "MVC", "Development"],
      projectLink: "https://tourvisto-dashboard.vercel.app",
   },
   {
      imgSrc: "/images/project-3.jpg",
      title: "Learning Management System",
      tags: ["SaaS", "Web-design", "CRUD"],
      projectLink: "https://oaksprotocol-lms.vercel.app",
   },
  //  {
  //     imgSrc: "/images/project-3.jpg",
  //     title: "AI Tutor Companion",
  //     tags: ["API", "MVC", "SaaS"],
  //     projectLink: "https://ai-teacher-akbarw.vercel.app",
  //  },
   {
      imgSrc: "/images/project-4.jpg",
      title: "Movie Database",
      tags: ["API", "Web-design"],
      projectLink: "https://movie-finder-akbarw.vercel.app",
   },
   {
      imgSrc: "/images/project-5.jpg",
      title: "Budget App",
      tags: ["CRUD", "Development"],
      projectLink: "https://budget-notes-akbarw.vercel.app",
   },
   {
      imgSrc: "/images/project-6.jpg",
      title: "Visual Thinkboard",
      tags: ["API", "CRUD", "SaaS"],
      projectLink: "https://visual-thinkboard.vercel.app",
   },
   {
      imgSrc: "/images/project-2.jpg",
      title: "Music Player",
      tags: ["CRUD", "API"],
      projectLink: "https://ui-music-player-akbarw.vercel.app",
   },
];

const Work = () => {
   return (
      <section id="work" className="section">
         <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
               My portfolio highlights
            </h2>

            <div className="!grid gap-x-4 gap-y-5 !grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]">
               {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                  <ProjectCard
                     key={key}
                     imgSrc={imgSrc}
                     title={title}
                     tags={tags}
                     projectLink={projectLink}
                     classes="reveal-up"
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Work;
