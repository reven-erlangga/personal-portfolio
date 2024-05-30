"use client";

import { randomUUID } from "crypto";
import { motion } from "framer-motion"
import BootcampCard from "./components/card/BootcampCard";

const bootcamps = [
    {
        key: "bootcamp-" + randomUUID,
        title: "Fullstack Developer (Node JS + React JS)",
        assetPath: "/assets/logo/harisenin.jpg",
        docUrl: "https://drive.google.com/file/d/1F8hVgRsf0eNX8Pu94Vtgina_QUBGz3LA/view",
        projectUrl: "https://github.com/reven-erlangga/vouchify",
        bootcampPlatform: "Harisenin"
    }
]

const Page = () => {
    return (
        <motion.div
            key="motion-bootcamp-page"
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
                            Bootcamp
                        </p>
                        <p>
                            A bootcamp is a short, intensive, specialized training course designed to quickly enhance learners’ practical skills in various fields.
                        </p>
                    </div>
                </div>

                <hr />

                <div className="w-full max-w-5xl items-center justify-between font-mono text-base lg:flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                    <div className="w-full grid lg:grid-cols-2 gap-8">
                        {bootcamps.map((bootcamp) => (
                            <BootcampCard
                                key={bootcamp.key}
                                title={bootcamp.title}
                                assetPath={bootcamp.assetPath}
                                docUrl={bootcamp.docUrl}
                                projectUrl={bootcamp.projectUrl}
                                bootcampPlatform={bootcamp.bootcampPlatform}
                            /> 
                        )) }                  
                    </div>
                </div>
            </main>
        </motion.div>
    )
};

export default Page;