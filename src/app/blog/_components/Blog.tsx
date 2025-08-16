import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="bg-black text-white px-5 lg:px-20 py-28">
      <div className="blogs flex flex-wrap">
        <div className="coulm1 w-full lg:w-[45%] lg:p-4 cursor-pointer">
          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src="https://ik.imagekit.io/msmrd69gi/ztmuaxoz0vr5r2403u705bl70rr5dfot.webp?updatedAt=1754384631907"
              width={500}
              height={500}
              alt="Award Image"
              className="w-full h-[600px] object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 h-58 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Text content overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 transition-all duration-500">
              <h2 className="text-white text-sm md:text-base font-medium mb-1">
                27 April 2025
              </h2>
              <p className="text-white text-2xl md:text-3xl font-bold mb-5 uppercase">
                Team GB Wins STA Award for a Fan App Built by Yellow Panther
              </p>

              <button className="relative flex items-center gap-1 px-9 py-3 border border-white text-base rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all duration-700 ease-in-out group group-hover:text-black">
                <FaArrowRight className="absolute left-[-25%] w-5 z-10 transition-all duration-700 group-hover:left-4 group-hover:fill-black" />

                <span className="z-10 uppercase tracking-wider transition-all duration-700 -translate-x-3 group-hover:translate-x-3">
                  Read More
                </span>

                <span className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

                <FaArrowRight className="absolute right-4 w-5 z-10 transition-all duration-700 group-hover:right-[-25%] group-hover:fill-black" />
              </button>
            </div>
          </div>
        </div>
        <div className="coulm2 flex flex-col gap-3 w-full lg:w-[55%] lg:p-4">
          <div className="row1 cursor-pointer">
            <div className="relative rounded-xl overflow-hidden group">
              <Image
                src="https://ik.imagekit.io/msmrd69gi/5yikbkgqxrw4unekugyslknomoful7ob.webp?updatedAt=1754384631407"
                width={500}
                height={500}
                alt="Award Image"
                className="w-full h-[295px] object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-58 bg-gradient-to-t from-black to-transparent z-10" />

              {/* Text content overlay */}
              <div className="absolute bottom-6 rounded-xl left-6 right-6 z-20 transition-all duration-500">
                <h2 className="text-white text-sm md:text-base font-medium mb-1">
                  27 April 2025
                </h2>
                <p className="text-white text-2xl md:text-3xl font-bold mb-5 uppercase">
                  Team GB Wins STA Award for a Fan App Built by Yellow Panther
                </p>

                <button className="relative flex items-center gap-1 px-9 py-2 border border-white text-base rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all duration-700 ease-in-out group group-hover:text-black">
                  <FaArrowRight className="absolute left-[-25%] w-5 z-10 transition-all duration-700 group-hover:left-4 group-hover:fill-black" />

                  <span className="z-10 uppercase tracking-wider transition-all duration-700 -translate-x-3 group-hover:translate-x-3">
                    Read More
                  </span>

                  <span className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

                  <FaArrowRight className="absolute right-4 w-5 z-10 transition-all duration-700 group-hover:right-[-25%] group-hover:fill-black" />
                </button>
              </div>
            </div>
          </div>
          <div className="row2 cursor-pointer">
            <div className="relative rounded-xl overflow-hidden group">
              <Image
                src="https://ik.imagekit.io/msmrd69gi/5642mf66mppb97k9e7n6du5fjdgs6sn4.webp?updatedAt=1754384631853"
                width={500}
                height={500}
                alt="Award Image"
                className="w-full h-[300px] object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-58 bg-gradient-to-t from-black to-transparent z-10" />

              {/* Text content overlay */}
              <div className="absolute bottom-6 rounded-xl left-6 right-6 z-20 transition-all duration-500">
                <h2 className="text-white text-sm md:text-base font-medium mb-1">
                  27 April 2025
                </h2>
                <p className="text-white text-2xl md:text-3xl font-bold mb-5 uppercase">
                  Team GB Wins STA Award for a Fan App Built by Yellow Panther
                </p>

                <button className="relative flex items-center gap-1 px-9 py-2 border border-white text-base rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all duration-700 ease-in-out group group-hover:text-black">
                  <FaArrowRight className="absolute left-[-25%] w-5 z-10 transition-all duration-700 group-hover:left-4 group-hover:fill-black" />

                  <span className="z-10 uppercase tracking-wider transition-all duration-700 -translate-x-3 group-hover:translate-x-3">
                    Read More
                  </span>

                  <span className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

                  <FaArrowRight className="absolute right-4 w-5 z-10 transition-all duration-700 group-hover:right-[-25%] group-hover:fill-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
