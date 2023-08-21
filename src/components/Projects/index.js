import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I've engaged in a variety of ReactJS and Node.js projects, covering
          web-based systems and more. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "ReactJs" ? (
            <ToggleButton
              active
              value="ReactJs"
              onClick={() => setToggle("ReactJs")}
            >
              ReactJs
            </ToggleButton>
          ) : (
            <ToggleButton value="ReactJs" onClick={() => setToggle("ReactJs")}>
              ReactJs
            </ToggleButton>
          )}
          <Divider />
          {toggle === "NeoG Camp" ? (
            <ToggleButton
              active
              value="NeoG Camp"
              onClick={() => setToggle("NeoG Camp")}
            >
              NeoG Camp
            </ToggleButton>
          ) : (
            <ToggleButton
              value="NeoG Camp"
              onClick={() => setToggle("NeoG Camp")}
            >
             NeoG Camp
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
