"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      key="motion-contact-page"
      initial={{ scale: 0.3, y: 100, opacity: 0 }}
      animate={{ scale: 0.9, y: 0, opacity: 1 }}
      exit={{ scale: 0.4, y: -100, opacity: 0 }}
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      <main className="flex gap-6 max-h-screen flex-col  w-full items-start justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
            Contact
          </a>
        </div>

        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <article className="prose">
            <p>
              Have an exciting project you need help with? Send me an email or
              contact me via social media!
            </p>
          </article>
        </div>

        <div className="flex gap-6">
          <a
            href="mailto:reven.erlangga@gmail.com"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <div className="text-primary">
              <img
                src={"/assets/icons/socials/email.svg"}
                alt="Email icons"
                width={25}
                height={25}
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/reven-ferlian-erlangga"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <img
              src={"/assets/icons/socials/linkedin.svg"}
              alt="Linkedin icons"
              width={25}
              height={25}
            />
          </a>
          <a
            href="https://www.instagram.com/reven.erlangga/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img
              src={"/assets/icons/socials/instagram.svg"}
              alt="Instagram icons"
              width={25}
              height={25}
            />
          </a>
          <a
            href="https://github.com/reven-erlangga"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <img
              src={"/assets/icons/socials/github.svg"}
              alt="Github icons"
              width={25}
              height={25}
            />
          </a>
        </div>
      </main>{" "}
    </motion.div>
  );
};

export default Page;
