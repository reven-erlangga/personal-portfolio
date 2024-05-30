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
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-base lg:flex">
          <p className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
            Reven Ferlian <br />
            Erlangga.
          </p>
        </div>

        <hr />

        <div className="w-full max-w-5xl items-center justify-between font-mono text-base lg:flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <article className="prose text-justify sm:w-full lg:w-2/3">
            <div className="flex flex-wrap gap-3">
              <p>
                I am a Software Engineering with more than 4 years of experience. Now concentrated more on Backend Developer especially Golang. 
              </p>

              <p>Over the course of my career, I have a track record of delivering project with a stable program and committed to providing efficient and high-quality technical solutions.</p>

              <p>Beyond my professional pursuits, I am deeply committed to focus my skill set in the blockchain field. I am dedicated to gaining a deeper understanding of the Blockchain.</p>
            </div>
          </article>
        </div>

       <div className="flex gap-6 mt-6">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200">
            <div className="text-primary">
              <img
                src={"/assets/icons/js.svg"}
                alt="Dribble"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200">
            <div className="text-primary">
              <img
                src={"/assets/icons/ts.svg"}
                alt="Dribble"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200">
            <div className="text-primary">
              <img
                src={"/assets/icons/go.svg"}
                alt="Dribble"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200">
            <div className="text-primary">
              <img
                src={"/assets/icons/docker.svg"}
                alt="Dribble"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200">
            <div className="text-primary">
              <img
                src={"/assets/icons/figma.svg"}
                alt="Dribble"
                width={25}
                height={25}
              />
            </div>
          </div>
          </div>
      </main>{" "}
    </motion.div>
  );
};

export default Page;
