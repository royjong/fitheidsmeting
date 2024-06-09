"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/tooltip";
const people = [
  {
    id: 1,
    name: "Diedrik kerkman",
    designation: "Psycholoog/Hoogleraar UMCG",
    image:
      "https://www.northjersey.com/gcdn/presto/2023/04/18/PNJM/48972df7-cc1b-49d3-9c91-908f78534164-041823_MTozzolitherapy_05.JPG",
  },
  {
    id: 2,
    name: "Andries van hulsten",
    designation: "Psycholoog",
    image:
      "https://pbs.twimg.com/profile_images/1315389898862592000/idqB-BMx_200x200.jpg",
  },
  {
    id: 3,
    name: "Janisha Duitsen",
    designation: "Neurowetenschapper",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPGG0HcT-c7fv8l-WrNotYNPO8IA9aJhmjFFA5b9d3pWxdsL3VcxJjI-IU6j0r0HGLAU&usqp=CAU",
  },
  {
    id: 4,
    name: "Marlinda jonkers",
    designation: "Pschiatrist",
    image:
      "https://photos.psychologytoday.com/eb3a2644-0c6d-4248-b23c-02d3401da256/1/320x400.jpeg",
  },
  {
    id: 5,
    name: "Janiek Haman",
    designation: "Neuro wetenschapper",
    image:
      "https://photos.psychologytoday.com/98da0dfb-b010-436d-aefd-0cb9e71a2e68/2/320x400.jpeg",
  },
  {
    id: 6,
    name: "Angela Lieverdink",
    designation: "Psycholoog/Psychiater",
    image:
      "https://photos.psychologytoday.com/e27e6bf1-ba46-46dd-9157-4b8a3b87de1c/1/320x400.jpeg",
  },
];

export function ToolTips() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
