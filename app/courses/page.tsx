"use client";

import { motion } from "framer-motion"
import CourseCard from "./components/card/CourseCard";
import { randomUUID } from "crypto";

const courses = [
    {
        key: "course-" + randomUUID,
        title: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
        assetPath: "/assets/banners/udemy.png",
        url: "https://www.udemy.com/certificate/UC-d508a19f-71b7-4186-ae07-19ebb0837d81",
        coursePlatform: "Udemy"
    },
    {
        key: "course-" + randomUUID,
        title: "Memulai Pemrograman Dengan Dart",
        assetPath: "/assets/banners/dicoding.png",
        url: "https://www.dicoding.com/certificates/KEXLGLW5WZG2",
        coursePlatform: "Dicoding"
    },
    {
        key: "course-" + randomUUID,
        title: "Flutter : Mastering Provider",
        assetPath: "/assets/banners/bwa.png",
        url: "https://buildwithangga.com/talent/revenerlangga/flutter-developer-provider-state-management",
        coursePlatform: "Build with angga"
    },
    {
        key: "course-" + randomUUID,
        title: "Flutter : Find House App",
        assetPath: "/assets/banners/bwa.png",
        url: "https://buildwithangga.com/talent/revenerlangga/dart-flutter-development-bootcamp-find-house-app",
        coursePlatform: "Build with angga"
    },
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
                            Course
                        </p>
                        <p>
                            Courses aim to equip learners with the skills to create accessible, inclusive digital experiences and products.
                        </p>
                    </div>
                </div>

                <hr />

                <div className="w-full max-w-5xl items-center justify-between font-mono text-base lg:flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                    <div className="w-full grid lg:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <CourseCard
                                key={course.key}
                                title={course.title}
                                assetPath={course.assetPath}
                                url={course.url}
                                coursePlatform={course.coursePlatform}
                            />
                            
                        )) }
                    </div>
                </div>
            </main>
        </motion.div>
    )
};

export default Page;