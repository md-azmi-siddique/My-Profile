import React from "react";
import DP from "../Assets/displayPicture/DP-removebg-preview.png"

const HeroSection = () => {
  return (
    <div className="md:bg-slate-500">
      <div className="container mx-auto pt-20">
        <div class="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2">
          {/* <!-- On small screens, the order is "Image" then "Description" --> */}
          <div className="sm:order-2">
            <img className="h-[500px] w-auto md:h-[580px]" src={DP} alt="Md Azmi Siddique" />
          </div>
          <div class="sm:order-1">
            <div className="Name">
              <p>Md Azmi Siddique</p>
            </div>
            <div className="aboutMe">
              <p>I'm a web developer who's good at making websites look great and work well. I'm also really good at finding clever solutions to problems. Let's work together to build something amazing</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
