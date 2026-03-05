import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="w-full max-w-[380px] flex-shrink-0 overflow-hidden rounded-lg border border-[#7042f88b] shadow-lg transition-all duration-300 hover:border-[#b49bff] hover:shadow-[0_0_20px_rgba(180,155,255,0.5)]"
    >
      <Image
        src={src}
        alt={title}
        width={400}
        height={250}
        className="h-48 w-full object-cover sm:h-[200px]"
      />

      <div className="p-5 bg-gradient-to-b from-[rgba(70,30,120,0.4)] to-[rgba(3,0,20,0.6)]">
        <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 line-clamp-2">{title}</h1>
        <p className="mt-2 text-sm text-gray-300 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};
