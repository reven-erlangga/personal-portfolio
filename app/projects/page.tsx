"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

const ProjectCard = dynamic(
  () => import("./components/ProjectCard/ProjectCard")
);

function makeTagElement(titles: Array<string>): ReactNode {
  return (
    <div key={uuidv4()} className="flex gap-4">
      {titles != null &&
        titles.map((title) => (
          <div key={uuidv4()} className="badge badge-primary">
            {title}
          </div>
        ))}
    </div>
  );
}

const projects = [
  {
    key: "project-1",
    title: "Warehouse Portal",
    description:
      "This admin portal website contains information related to important data needed by users. The features available on this website include a login system, dashboard, and pages to manage important data. This website is indicated for department warehouses to support their work.",
    src: "assets/images/projects/project-1.png",
    alt: "Warehouse portal",
    tags: makeTagElement(["Laravel", "MySQL"]),
  },
  {
    key: "project-2",
    title: "Digital Check Sheet",
    description:
      "This digital checksheet website uses Laravel as the admin panel for the checksheet management and uses flutter applied in the zebra TC20 device to check forklifts.",
    src: "assets/images/projects/project-1.png",
    alt: "Digital check sheet project",
    tags: makeTagElement(["Laravel", "Flutter", "MySQL"]),
  },
  {
    key: "project-3",
    title: "Warehouse Product Transfer App",
    description:
      "Website to transfer goods / products between warehouses. There are several warehouses in accommodating goods (material warehouses, semi-production and production) goods will be put into the appropriate warehouse based on the type of goods.",
    src: "assets/images/projects/project-1.png",
    alt: "Warehouse transfer app",
    tags: makeTagElement(["Laravel", "MySQL"]),
  },
  {
    key: "project-4",
    title: "Sales Portal",
    description:
      "Website to help with car sales. This website can calculate payment simulations based on the type of payment and how many years of repayment to get the main payment and installments that must be charged.",
    src: "assets/images/projects/project-1.png",
    alt: "Sales portal",
    tags: makeTagElement(["Laravel", "Flutter", "MySQL"]),
  },
  {
    key: "project-5",
    title: "Company Profile CV Metrico Primakarsa",
    description:
      "CV Metrico Primakarsa's company profile website shown for a showcase of services offered by the company",
    src: "assets/images/projects/project-1.png",
    alt: "CV Metrico Primakarsa",
    tags: makeTagElement(["CI 3"]),
  },
  {
    key: "project-6",
    title: "Website Installment Management",
    description:
      "Website for student installment management and automatic messaging using whatsapp in accordance with the message data that has been set",
    src: "assets/images/projects/project-1.png",
    alt: "Installment management",
    tags: makeTagElement(["Laravel", "MySQL"]),
  },
  {
    key: "project-7",
    title: "Teacher & Student App",
    description:
      "Mobile application used for attendance, submission of teaching extras etc. This application uses Laravel as its rest API and Flutter as its mobile app.",
    src: "assets/images/projects/project-1.png",
    alt: "Teacher and student app",
    tags: makeTagElement(["Laravel", "Flutter", "MySQL"]),
  },
];

const Page = () => {
  return (
    <motion.div
      key="motion-project-page"
      initial={{ scale: 0.3, y: 100, opacity: 0 }}
      animate={{ scale: 0.9, y: 0, opacity: 1 }}
      exit={{ scale: 0.4, y: -100, opacity: 0 }}
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      <main className="flex gap-6 max-h-screen flex-col w-full items-start justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-base lg:flex">
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
              My Projects
            </p>
            <p>
              This project contains website and mobile application that I have
              made. Get inspired and see my best work only in this project.
            </p>
          </div>
        </div>

        <hr />

        <div className="w-full max-w-5xl items-center justify-between font-mono text-base lg:flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <div className="w-full grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.key}
                title={project.title}
                description={project.description}
                src={project.src}
                alt={project.alt}
                tags={project.tags}
              />
            ))}
          </div>
        </div>

        <hr />
      </main>
    </motion.div>
  );
};

export default Page;
