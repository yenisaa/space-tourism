import { useParams } from "react-router-dom";
import { destinations } from "../api/data";
import { NavLink } from "react-router-dom";

export default function DestinationDetails() {
  const { planet } = useParams();

  const destination = destinations.find(
    (item) => item.name.toLowerCase() === planet.toLowerCase()
  );

  if (!destination) {
    return <p className="text-red-500">Planet not found</p>;
  }

  return (
    <>
      {/* Left image */}
      <div className="flex items-center justify-center md:items-center ">
        <img
          src={destination.images.webp}
          alt={destination.name}
          className="lg:w-[480px] md:w-[300px] w-[150px]"
        />
      </div>

      {/* Right info */}
      <div className="flex flex-col items-center text-center text-white">
        {/* Nav tabs ABOVE planet info */}
        <nav className="flex gap-6 justify-center md:justify-start mb-6 font-paragraph tracking-wider uppercase">
          {["moon", "mars", "europa", "titan"].map((p) => (
            <NavLink
              key={p}
              to={`/destination/${p}`}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-2 text-white"
                  : "text-gray-400 hover:text-white transition"
              }
            >
              {p}
            </NavLink>
          ))}
        </nav>

        {/* Planet details */}
        <div className="flex flex-col justify-center items-center md:w-[688px] w-[327px]">
          <h2 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {destination.name}
          </h2>
          <p className="font-paragraph text-gray-300 mb-8 leading-relaxed md:w-[514px]">
            {destination.description}
          </p>
          <hr className="border-gray-600 my-6" />
          <div className="flex flex-col md:flex-row self-center gap-[24px] justify-center lg:justify-start">
            <div>
              <p className="uppercase text-sm tracking-widest text-gray-400">
                Avg. distance
              </p>
              <p className="text-preset-6 font-heading">
                {destination.distance}
              </p>
            </div>
            <div>
              <p className="uppercase text-sm tracking-widest text-gray-400">
                Est. travel time
              </p>
              <p className="text-preset-6 font-heading">{destination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
