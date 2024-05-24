"use client"
import {  Typography } from '@mui/material'
import React, { useState } from 'react'
import { SKILLS } from '../utils/data'
import SkillsCard from '../SkillsCard/SkillsCard'
import "./skills.css"
import SkillsCardInfor from '../SkillsCardInfor/SkillsCardInfor'
import { useIsMobile } from '../hooks/UseMobile'

const Skills = () => {
    const mobile = useIsMobile()
    const [selectSkill, setSelectSkill] = useState(SKILLS[0]);
    const handleSelectSkill = (data) => {
        setSelectSkill(data)
    }


    return (
      <section
        style={{
          margin: "4rem 0",
          position: "relative",
          color: "white",
        }}
      >
        <Typography
          variant="h5"
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "3.5rem",
          }}
        >
          Technical Proficiency
        </Typography>
        <div
          className="sc"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "3rem",
            // flexDirection: mobile ? "column" : "column-reverse",
          }}
        >
          <div
            className="s"
            style={{
              flex: 1,
              display: "grid",
              gridGap: "3rem",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {SKILLS.map((item) => (
              <SkillsCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            ))}
          </div>
          <div
            className="si"
            style={{
              flex: 1,
            }}
          >
            <SkillsCardInfor
              heading={selectSkill.title}
              skills={selectSkill.skills}
            />
          </div>
        </div>
      </section>
    );
}

export default Skills