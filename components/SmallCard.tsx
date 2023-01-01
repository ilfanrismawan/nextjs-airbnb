import Image from "next/image";
type Type = {
  img: string;
  location: string;
  distance: string;
};
function SmallCard({ img, location, distance }: Type) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer transition transform hover:bg-gray-100 hover:scale-105 duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image alt={location} fill src={img} className="rounded-lg" />
      </div>

      {/* Right */}
      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
