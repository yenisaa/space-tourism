import { useParams } from "react-router-dom";
import { crew } from "../api/data";
import { NavLink } from "react-router-dom";

export default function DestinationDetails() {
  const { members } = useParams();

  const crews = crew.find(
    (item) => item.name.toLowerCase() === members.toLowerCase()
  );

  if (!crews) {
    return <p className="text-red-500">Crew Members not found</p>;
  }

  

  return (
    <>
      {/* Right info */}
      <div className="flex flex-col justify-between w-full items-center text-white">
        {/* crew details */}
        <div className="flex flex-col justify-center items-center lg:items-start lg:w-full md:w-[688px] w-[327px]">
          <div className="flex flex-col md:items-center lg:items-start md:w-full w-full">
            <p className="font-heading text-preset-4 text-gray-300 mb-8 leading-relaxed uppercase">
              {crews.role}
            </p>
            <h2 className="font-heading text-preset-3  uppercase mb-4">
              {crews.name}
            </h2>
          </div>
          <p className="font-paragraph text-gray-300 mb-8 leading-relaxed md:w-[514px]">
            {crews.bio}
          </p>
        </div>
        <div className="w-full">
          <nav className="flex gap-6 flex-wrap justify-center lg:justify-start  mb-6 font-paragraph tracking-wider uppercase w-full">
            {["Douglas Hurley", "Mark Shuttleworth", "Victor Glover", "Victor Ansari"].map((m) => (
              <NavLink
                key={m}
                to={`/crew/${m}`}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white pb-2 text-white"
                    : "text-gray-400 hover:text-white transition"
                }
              >
                {m}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      {/* Left image */}
      <div className="flex items-center justify-center md:items-center ">
        <img
          src={crews.images.webp}
          alt={crews.images.webp}
          className="lg:w-[480px] md:w-[300px] w-[150px]"
        />
      </div>
    </>
  );
}
