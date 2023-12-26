import React from "react";
import BF from "../Assets/background_images/skills.jpg"
import HTML from '../Assets/skills/html.png'
import CSS from '../Assets/skills/css.png'
import JS from '../Assets/skills/js.png'
import BOOTSTRAP from '../Assets/skills/bootstrap.png'
import PHP from '../Assets/skills/python.png'
import CardDesign from "./CardDesign";

const Skills = () => {
  const skillsData = [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "JavaScript", image: JS },
    { name: "Bootstrap", image: BOOTSTRAP },
    { name: "Php", image: PHP },
    { name: "Php", image: PHP },
  ];

  return (
    <div className="mt-10 bg-[BF] bg-cover bg-center" data-aos="fade-up" style={{ backgroundImage: `url(${BF})` }}>
      <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-3 mx-10 gap-3 md:grid-cols-6" data-aos="fade-right">
          {skillsData.map((skill, index) => (
            <CardDesign
              key={index}
              name={skill.name}
              image={skill.image}
              description={skill.description}
              imageHeight="20"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
