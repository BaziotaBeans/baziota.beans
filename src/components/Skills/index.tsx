import React from "react";

import { skillList } from "../../utils";

import {
  Container,
  Content,
  TransitionSkillHeading,
  SkillWrapperCards,
  SkillCard,
} from "./styles";

const Skills: React.FC<any> = ({ ref }) => {
  return (
    <Container id="skills" ref={ref}>
      <Content>
        <TransitionSkillHeading>Skills</TransitionSkillHeading>
        <SkillWrapperCards>
          {skillList.map((item) => (
              <SkillCard key={item.id}>
              <h4>{item.skillHeading}</h4>
              <h2>{item.skillSubHeading}</h2>
  
              <p>
                {item.text}
              </p>
            </SkillCard>
          ))}
        </SkillWrapperCards>
      </Content>
    </Container>
  );
};

export default Skills;
