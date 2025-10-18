import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Library'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/nextjs.svg',
    label: 'NextJS',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/shadcn-ui.png',
    label: 'ShadcnUI',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/stripe.svg',
    label: 'Stripe',
    desc: 'Payment Getaway'
  },
  {
    imgSrc: '/images/supabase.svg',
    label: 'Supabase',
    desc: 'Database'
  },
  {
    imgSrc: '/images/clerk.svg',
    label: 'Clerk',
    desc: 'Authentication'
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">

         <h2 className="headline-2">
            Essential Tools I Use
         </h2>

         <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Discover the powerful tools and technologies I use to create
            exceptional, high performing websites & applications.
         </p>

         <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
            {
               skillItem.map(({ imgSrc, label, desc }, key) => (
                  <SkillCard 
                     key={key}
                     imgSrc={imgSrc}
                     label={label}
                     desc={desc}
                  />
               ))
            }
         </div>
      </div>
    </section>
  )
}

export default Skill
