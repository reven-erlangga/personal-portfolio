import { ReactNode } from "react";
import Logo from "../Logo/Logo";

interface Props {
  title: string;
  location: string;
  workingYear: string;
  children?: ReactNode;
}

const ExperienceCard = ({ title, location, workingYear, children }: Props) => {
  return (
    <div className="card w-full glass">
      <h2 className="card-title my-4 mx-8">
        <div className="flex w-full justify-between">
          <div>
            <div className="flex flex-col gap-2">
              <p>{title}</p>
              <p className="text-base">{location}</p>
            </div>
          </div>
          <p className="text-right">{workingYear}</p>
        </div>
      </h2>
      <div className="card-body">
        <div className="flex gap-4">{children}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
