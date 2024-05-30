"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      key="motion-initial-page"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      <main className="flex flex-col gap-6 items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-base lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <span className="flex place-items-center gap-2 p-8 lg:p-0">
              Portofolio
            </span>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <div className="w-full max-w-5xl items-center justify-between font-mono text-base lg:flex">
            <div className="flex flex-col gap-4 items-start justify-between">
              <span className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                Reven Ferlian Erlangga.
              </span>
              <span className="max-w-auto border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Software Engineer
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="my-auto relative flex place-items-start">
                <div className="mockup-code">
                  <pre data-prefix="$">
                    <code>npm i portfolio</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code>portfolio processing...</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code>Done!</code>
                  </pre>
                </div>
              </div>
              <Link
                href={`/about`}
                title="Get Started"
                className="btn btn-primary cursor-none"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      </main>
    </motion.div>
  );
}
