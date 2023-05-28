interface Props {
  src: string;
  alt: string;
}

const Logo = ({ src, alt }: Props) => {
  return (
    <img className="rounded-full object-fit h-24 w-24" src={src} alt={alt} />
  );
};

export default Logo;
