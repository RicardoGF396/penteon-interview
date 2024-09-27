import Image from "next/image";

type CardProps = {
  image: string;
  fullname: string;
  catFact: string;
};

export default function Card({ image, fullname, catFact }: CardProps) {
  return (
    <div className="mx-12 py-3 px-4 shadow-sm border rounded-md mt-6">
      <div className="flex items-center gap-x-3 mb-2">
        <Image alt="profile-img" src={image} height={42} width={42} className="rounded-full" />
        <p className="font-medium">{fullname}</p>
      </div>
      <p className="text-slate-600">{catFact}</p>
    </div>
  );
}
