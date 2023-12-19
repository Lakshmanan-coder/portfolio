"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";
import TimelineElement from "./timelineElement";
export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();


  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="" animate = {true}>
        {experiencesData.map((item, index) => {
          return <TimelineElement key={item.date} item= {item}/>})}
      </VerticalTimeline>
    </section>
  );
}
