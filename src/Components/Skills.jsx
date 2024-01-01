import React from "react";
import BF from "../Assets/background_images/skills.jpg"
import HTML from '../Assets/skills/html.png'
import CSS from '../Assets/skills/css.png'
import JS from '../Assets/skills/js.png'
import BOOTSTRAP from '../Assets/skills/bootstrap.png'
import PYTHON from '../Assets/skills/python.png'
import CardDesign from "./CardDesign";

const Skills = () => {
  const skillsData = [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "JavaScript", image: JS },
    { name: "Bootstrap", image: BOOTSTRAP },
    { name: "Python", image: PYTHON },
    
  ];

  return (
    <div className="bg-[BF] bg-cover bg-center" data-aos="fade-up" style={{ backgroundImage: `url(${BF})` }}>
      <div className="container mx-auto">
      <h2 className="text-[40px] font-bold mb-4 text-center text-slate-50 ">Skills</h2>
        <div className="grid grid-cols-3 mx-2 gap-3 md:grid-cols-6 md:mx-10" data-aos="fade-right">
          {skillsData.map((skill, index) => (
            <CardDesign
              key={index}
              name={skill.name}
              image={skill.image}
              hoverColor="bg-sky-700"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
