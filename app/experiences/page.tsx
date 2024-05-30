"use client";

import { motion } from "framer-motion";
import Logo from "./components/Logo/Logo";
import dynamic from "next/dynamic";

const ExperienceCard = dynamic(
  () => import("./components/ExperienceCard/ExperienceCard")
);

const Page = () => {
  return (
    <motion.div
      key="motion-experience-page"
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
              My Experiences
            </p>
            <p>
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </div>
        </div>

        <hr />

        <div className="w-full max-w-5xl items-center justify-between font-mono text-base lg:flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <div className="flex flex-col gap-8">
            <div className="snap-center">
              <ExperienceCard
                key="golden-english-exp"
                title="Golden English"
                location="Bekasi, Indonesia"
                workingYear="May 2022 - May 2023"
              >
                <div className="flex flex-col gap-2">
                  <article className="prose text-justify">
                    <ul className="list-disc">                      
                      <li className="my-2">
                        <p>
                          Leading a team of 4 people in designing and developing a Golden English website and mobile application for teachers and students to facilitate absence, evaluation processing and also publish student reports (Laravel, Livewire, JS, Tailwind CSS, Flutter & Third Party Services: Midtrans, Santry, Woowa).
                        </p>
                      </li>
                      <li className="my-2">
                        <p>
                          Design and develop a website for student data management to facilitate sales teams to follow up students who still have installment (Laravel, Livewire, JS, Tailwind CSS & Third Party Services: Santry, Woowa).
                        </p>
                      </li>
                      <li className="my-2">
                        <p>
                          Design and develop a booking class website to make it easier for teachers to get classes in each branch (Laravel, Livewire, JS, Tailwind CSS & Alpine JS).
                        </p>
                      </li>
                      <li className="my-2">
                        <p>
                          Development of the Golden English portal website in facilitating each division to carry out data processing of employees, students and teachers, course processing, employee remuneration and others (CI 3, Bootstrap, JS & Third Party Services: Woowa).
                        </p>
                      </li>
                      <li className="my-2">
                        <p>
                          Implement software requirements according to user
                          requirements as well as perform periodic maintenance
                          and backups.
                        </p>
                      </li>
                      <li className="my-2">
                        <p>Creating API documentation using Postman.</p>
                      </li>
                    </ul>
                  </article>

                  <div className="flex flex-auto gap-4 mt-2">
                    <div className="badge badge-primary">CI 3</div>
                    <div className="badge badge-primary">Laravel</div>
                    <div className="badge badge-primary">Flutter</div>
                    <div className="badge badge-primary">Tailwind CSS</div>
                    <div className="badge badge-primary">Alpine JS</div>
                    <div className="badge badge-primary">MySQL</div>
                  </div>
                </div>
                <br />
                <Logo
                  src={`assets/images/company/golden-english.jpg`}
                  alt="Logo Golden English"
                />
              </ExperienceCard>
            </div>
            <div className="snap-center">
              <ExperienceCard
                key="mahsing-exp"
                title="PT Mah Sing Indonesia"
                location="Bekasi, Indonesia"
                workingYear="February 2020 - February 2022"
              >
                <div className="flex flex-col gap-2">
                  <article className="prose text-justify">
                    <ul className="list-disc">
                      <li className="my-2">
                        <p>
                          Developed a digital check sheet application using
                          Laravel and Flutter on the Zebra TC20 Barcode device
                          for forklift maintenance.
                        </p>
                      </li>
                      <li className="my-2">
                        <p>
                          Developed incoming and outgoing applications for
                          warehouse that are implemented on the Zebra TC20
                          Barcode device.
                        </p>
                      </li>
                      <li className="my-2">
                        <p>
                          Developed the delivery note feature on the HRD portal
                          which is integrated with Odoo.
                        </p>
                      </li>
                      <li className="my-2">
                        <p>
                          Work as a team in developing the Coretools system for
                          calibration and review of measuring instruments.
                        </p>
                      </li>
                      <li className="my-2">
                        <p>
                          Monitor application and resolve debugs or errors in
                          the application.
                        </p>
                      </li>
                      <li className="my-2">
                        <p>
                          Created a website portal with 2 databases that are
                          integrated each other, we are using MySQL for the
                          portal website and integrated with the Postgress SQL
                          database for the Odoo.{" "}
                        </p>
                      </li>
                    </ul>
                  </article>
                  <div className="flex flex-auto gap-4 mt-2">
                    <div className="badge badge-primary">Laravel</div>
                    <div className="badge badge-primary">Flutter</div>
                    <div className="badge badge-primary">Tailwind CSS</div>
                    <div className="badge badge-primary">Alpine JS</div>
                    <div className="badge badge-primary">Zebra TC 20</div>
                    <div className="badge badge-primary">PostgreSQL</div>
                    <div className="badge badge-primary">MySQL</div>
                  </div>
                </div>
                <Logo
                  src={`assets/images/company/mahsing.jpg`}
                  alt="Logo Mahsing"
                />
              </ExperienceCard>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Page;
