import ProjectCard from "./ProjectCard"

const works = [
   {
      imgSrc: '/images/project-1.jpg',
      title: 'Travel Agency Dashboard',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://kian-pamungkas-travel-agency-dashboard.vercel.app'
   },
   {
      imgSrc: '/images/project-2.jpg',
      title: 'Music Player',
      tags: ['Development', 'MVC', 'API'],
      projectLink: 'https://kian-pamungkas-music-player.vercel.app'
   },
   {
      imgSrc: '/images/project-3.jpg',
      title: 'AI Tutor Companion',
      tags: ['API', 'MVC', 'SaaS'],
      projectLink: 'https://kian-pamungkas-ai-tutor.vercel.app'
   },
   {
      imgSrc: '/images/project-4.jpg',
      title: 'Movie Database',
      tags: ['API', 'Web-design'],
      projectLink: 'https://kian-movie-database.vercel.app'
   },
   {
      imgSrc: '/images/project-5.jpg',
      title: 'Budget App',
      tags: ['MVC', 'Development'],
      projectLink: 'https://kian-pamungkas-budget-app.vercel.app'
   },
]

const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

         <h2 className="headline-2 mb-8">
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
               />
            ))}
         </div>
      </div>
    </section>
  )
}

export default Work
