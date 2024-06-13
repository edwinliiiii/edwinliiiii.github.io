import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import { FaGolang, FaHtml5, FaCss3Alt, FaAws, FaSass, FaJava, FaReact, FaVuejs, FaNode, FaPython, FaDocker, FaNpm, FaYarn, FaGithub, FaDatabase, FaJenkins } from "react-icons/fa6";
import { BiLogoJavascript, BiLogoTypescript, BiLogoMongodb, BiLogoFlask, BiLogoGraphql } from "react-icons/bi";
import { TbBrandElastic } from "react-icons/tb";
import { SiGnubash, SiRacket, SiPrisma, SiPostgresql } from "react-icons/si";

export default function SoftwareSkill() {
  const iconMapping = {
    golang: <FaGolang/>,
    html: <FaHtml5/>,
    css: <FaCss3Alt/>,
    aws: <FaAws/>,
    sass: <FaSass/>,
    java: <FaJava/>,
    react: <FaReact/>,
    vue: <FaVuejs/>,
    node: <FaNode/>,
    python: <FaPython/>,
    docker: <FaDocker/>,
    npm: <FaNpm/>,
    yarn: <FaYarn/>,
    prisma: <SiPrisma/>,
    git: <FaGithub/>,
    javascript: <BiLogoJavascript/>,
    typescript: <BiLogoTypescript/>,
    mongo: <BiLogoMongodb/>,
    sql: <FaDatabase/>,
    flask: <BiLogoFlask/>,
    elastic: <TbBrandElastic/>,
    cli: <SiGnubash/>,
    postgres: <SiPostgresql/>,
    graphql: <BiLogoGraphql/>,
    jenkins: <FaJenkins/>,
    racket: <SiRacket/>, // LMAO
  }


  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {iconMapping[skills.fontAwesomeClassname]}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
