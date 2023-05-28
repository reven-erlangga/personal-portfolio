"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      key="motion-about-page"
      initial={{ scale: 0.3, y: 100, opacity: 0 }}
      animate={{ scale: 0.9, y: 0, opacity: 1 }}
      exit={{ scale: 0.4, y: -100, opacity: 0 }}
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      <main className="flex gap-6 max-h-screen flex-col w-full items-start justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
            Reven Ferlian <br />
            Erlangga.
          </p>
        </div>

        <hr />

        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <article className="prose text-justify sm:w-full lg:w-2/3">
            <p>
              A diploma degree of computer Engineering from Universitas Islam 45
              Bekasi. Experienced as a software engineer who works with HTML,
              CSS, JavaScript, Laravel and Flutter with more than 3 years
              experience. Designed and developed web applications across
              multiple API, third-party integrations and databases.
            </p>
          </article>
        </div>

        <div className="w-full grid grid-cols-3 gap-4 mt-6">
          <div className="mockup-window border bg-base-300">
            <p className="ml-4 my-2 text-xl text-gray-400">
              Software Development
            </p>
            <div className="flex justify-start px-4 py-6 bg-base-200">
              <article className="prose text-justify">
                Experienced in both functional and OOP: Dart, Go, PHP,
                JavaScript, TypeScript.
              </article>
            </div>
          </div>
          <div className="mockup-window border bg-base-300">
            <p className="ml-4 my-2 text-xl text-gray-400">Backend Developer</p>
            <div className="flex justify-start px-4 py-6 bg-base-200">
              <article className="prose text-justify">
                Passionate about Backend Developer. Over 3 years of development
                experience and i love PHP, JS and Nest JS frameworks.
              </article>
            </div>
          </div>
          <div className="mockup-window border bg-base-300">
            <p className="ml-4 my-2 text-xl text-gray-400">
              Mobile Development
            </p>
            <div className="flex justify-start px-4 py-6 bg-base-200">
              <article className="prose text-justify">
                Skilled in developing hybrid mobile apps and cross-platform
                solutions using the Flutter framework.
              </article>
            </div>
          </div>
        </div>
      </main>{" "}
    </motion.div>
  );
};

export default Page;
