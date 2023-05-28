import { ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  src: string;
  alt: string;
  tags: ReactNode;
}

const ProjectCard = ({ title, description, src, alt, tags }: Props) => {
  return (
    <div className="flex flex-col rounded-lg bg-base-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row transition hover:scale-105 transform-gpu w-full">
      {/* <img
        className="bg-white min-h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-4"
        src={src}
        alt={alt}
      /> */}

      <div className="flex flex-col justify-start p-6">
        <div className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {title}
        </div>

        <article className="grow prose text-justify sm:w-full mt-4">
          <p>{description}</p>
        </article>

        <div className="place-content-end text-xs text-neutral-500 dark:text-neutral-300 mt-6">
          {tags}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
