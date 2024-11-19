import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Stephen",
  lastName: "Urah",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/avatar.svg",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", ""], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/urah001",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/stephen-samuel-2945bb249/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/PsalmWell",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:stephensamuel063@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Developer and Cyber security specialist</>,
  subline: (
    <>
      I'm Urah, a web Developer and a cyber secuity analyst, I craft my
      intuitive
      <br /> user experiences, make reseaches on security topics , After hours,
      I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Urah is a web-based designer, web3 engineer, and a cyber security
        enthusiast with a passion for transforming complex challenges into
        simple, elegant design solutions, researching on cyber security topic
        and adding more knowledge to his knowledge base. His work spans digital
        interfaces, interactive experiences, and the convergence of design and
        technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      // web3 wicked ape
      {
        company: "U.R TECH",
        timeframe: "-",
        role: "frontend Developer",
        achievements: [
          <>
            Created the frontend for a Web3 trading platform using Next.js,
            Redux, and ShadCN and different tech stack
          </>,

          <>
            I gained hands-on experience with cutting-edge tools like Next.js,
            Redux, and ShadCN. i also grew Understanding on how to integrate and
            utilize modern frameworks and libraries strengthens my expertise in
            frontend development.
          </>,
          <>
            I implemented Redux to handle state management, I learned how to
            organize and manage application state efficiently, which is
            essential for building dynamic and interactive user interfaces. This
            also enhances my debugging and problem-solving skills.
          </>,
          <>
            By creating a Web3 trading platform, I explored blockchain-related
            concepts and integrations. I gained insight into the principles of
            decentralized applications, smart contract interactions, and wallet
            connectivity
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cryptoWeb.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      // student site
      {
        company: "U.R TECH",
        timeframe: "--",
        role: "Developer",
        achievements: [
          <>
            Creating the student-focused website was an invaluable learning
            experience that significantly enhanced my technical and professional
            skills. By building the platform using Next.js, ShadCN, and
            Supabase, I gained practical experience in full-stack web
            development, allowing me to deepen my understanding of modern
            frameworks and tools
          </>,
          <>
            Creating the student-focused website was an invaluable learning
            experience that significantly enhanced my technical and professional
            skills. By building the platform using Next.js, ShadCN, and
            Supabase, I gained practical experience in full-stack web
            development, allowing me to deepen my understanding of modern
            frameworks and tools
          </>,
          <>
            The use of ShadCN enabled me to explore component-based UI design,
            making the interface both responsive and visually appealing.
            Managing the database structure and optimizing queries in Supabase
            provided me with insights into relational database design and
            performance considerations.
          </>,
          <>
            Beyond technical expertise, the project fostered my problem-solving
            and critical thinking abilities, as I tackled challenges such as
            ensuring scalability and securing user data. Additionally,
            collaborating on a project with real-world implications helped me
            sharpen my project management skills, including planning,
            deployment, and iterative improvement based on user feedback.
          </>,
          <>
            Overall, the experience boosted my confidence in developing robust,
            user-centric applications and prepared me for tackling more complex
            web development challenges in the future.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/schoolHub.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      // clinic netxjs
      {
        company: "U.R TECH",
        timeframe: "--",
        role: "Developer",
        achievements: [
          <>
            Developing the clinic appointment platform was a transformative
            experience that significantly advanced my skills and knowledge. I
            built a scalable and performant frontend using Next.js, effectively
            leveraging its server-side rendering and API integration
            capabilities. By incorporating shadcn, I created modern, accessible
            UI components, improving my design and user experience expertise.
          </>,
          <>
            Integrating Kinde for authentication deepened my understanding of
            secure user management, while deploying the project with Cloudify
            enhanced my proficiency in cloud hosting and deployment strategies.
            Working with Strapi as a headless CMS taught me how to manage
            dynamic content seamlessly and strengthened my backend integration
            skills.
          </>,
          <>
            Implementing geolocation features allowed me to explore geospatial
            technologies, learning how to calculate distances and deliver
            location-based results efficiently. This project also provided me
            with hands-on experience in building functional booking systems,
            refining my API management, debugging, and problem-solving
            abilities.
          </>,
          <>
            Overall, this endeavor sharpened my full-stack development
            capabilities, improved my adaptability to new tools, and equipped me
            with the experience necessary to tackle real-world challenges in
            creating user-centric, feature-rich platforms.
          </>,
        ],
        images: [],
      },
      // linktree clone
      {
        company: "Zuri",
        timeframe: "2021 - 2022",
        role: "intern",
        achievements: [
          <>
            designed a linktree for the platform, resulting in a 20% increase in
            user engagement and 30% faster load times.
          </>,
          <>
            Your ability to learn React.js and complete a project independently
            within the internship duration highlighted the company’s capability
            to foster talent. This indirectly contributed to their reputation as
            an organization that nurtures skilled professionals
          </>,
          <>
            My success in learning and applying React.js provided valuable
            feedback to the company about their training programs. It led to
            improvements in the way they structure future internship or
            onboarding sessions, increasing the overall productivity of their
            teams.
          </>,
          <>
            The Linktree clone developed served as a personal branding tool and
            also inspired the company to adopt similar features, expanding their
            product/service offerings.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/linkTreeClone.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      // python ML
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },

      // zappy

      // hr site
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Confluence University ",
        description: <>Studied cyber security , Major Networking</>,
      },
      {
        name: "Cisco",
        description: <>Studied online Cyber security and Networking.</>,
      },
      {
        name: "Courserea",
        description: (
          <>Studied online Cyber security , Networking and CryptoGraphy.</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [
          {
            src: "/images/figma.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      //  supabase
      {
        title: "Supabase",
        description: (
          <>
            Able to build scalable apps with Supabase at lightning
            speed—effortlessly integrating authentication, real-time data, and
            storage like a pro. .
          </>
        ),
        images: [
          {
            src: "/images/supabase.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Able to craft high-performance web apps with Next.js at an
            incredible pace—seamlessly merging server-side rendering, API
            routes, and dynamic routing for unmatched user experiences.
          </>
        ),
        images: [
          {
            src: "/images/NextJS.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      // docker
      {
        title: "Docker",
        description: (
          <>
            Masterfully orchestrating scalable environments with
            Docker—building, shipping, and running applications in containers
            with speed and efficiency that defies limits.
          </>
        ),
        images: [
          {
            src: "/images/docker.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      // Orm
      {
        title: "Prisms ORM",
        description: (
          <>
            Effortlessly managing databases with Prisma ORM—delivering
            lightning-fast queries and seamless migrations while keeping complex
            relationships under control with precision.
          </>
        ),
        images: [
          {
            src: "/images/primsa.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      // strapi
      {
        title: "Strapi",
        description: (
          <>
            apidly building custom CMS solutions with Strapi—unleashing a
            headless backend that integrates content and APIs with unmatched
            flexibility and ease.
          </>
        ),
        images: [
          {
            src: "/images/NextJS.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Kinde",
        description: (
          <>
            Effortlessly integrating authentication and user management with
            Kinde—delivering secure, scalable identity solutions at blazing
            speed.
          </>
        ),
        images: [
          {
            src: "/images/NextJS.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "python",
        description: (
          <>
            Developing clean, efficient, and versatile solutions in
            Python—solving complex problems with simplicity and writing code
            that runs steamlessly.
          </>
        ),
        images: [
          {
            src: "/images/NextJS.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design, tech and security...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
// put this back in the obj
//gallery;
