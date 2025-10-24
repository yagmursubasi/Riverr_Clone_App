import {
  FaCode,
  FaPaintbrush,
  FaBullhorn,
  FaPenFancy,
  FaVideo,
  FaRobot,
  FaMusic,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa6";
import type { ICategory, IInfo, IInput } from "../types";

export const categories: ICategory[] = [
  { name: "Programming & Tech", icon: <FaCode /> },
  { name: "Graphics & Design", icon: <FaPaintbrush /> },
  { name: "Digital Marketing", icon: <FaBullhorn /> },
  { name: "Writing & Translation", icon: <FaPenFancy /> },
  { name: "Video & Animation", icon: <FaVideo /> },
  { name: "AI Services", icon: <FaRobot /> },
  { name: "Music & Audio", icon: <FaMusic /> },
  { name: "Business", icon: <FaBriefcase /> },
  { name: "Consulting", icon: <FaUserTie /> },
];

export const items: IInfo[] = [
  {
    title: "Dedicated hiring experts",
    text: "Count on an account manager to find you the right talent and see to your project’s every need.",
  },
  {
    title: "Satisfaction guarantee",
    text: "Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.",
  },
  {
    title: "Advanced management tools",
    text: "Seamlessly integrate freelancers into your team and projects.",
  },
  {
    title: "Flexible payment models",
    text: "Pay per project or opt for hourly rates to facilitate longer-term collaboration.",
  },
];

export const inputs: IInput[] = [
  {
    label: "Title",
    name: "title",
    required: true,
  },
  {
    label: "Cover Image",
    name: "coverImage",
    required: true,
    type: "file",
  },
  {
    label: "Images",
    name: "images",
    required: true,
    type: "file",
    multiple: true,
  },
  {
    label: "Number of Revisions",
    name: "package_revisions",
    required: true,
    type: "number",
    min: 1,
  },
  {
    label: "Features (separate with ',')",
    name: "package_features",
    required: true,
    type: "textarea",
  },
  {
    label: "Description",
    name: "description",
    required: true,
    type: "textarea",
  },
  {
    label: "Package Description",
    name: "package_description",
    required: true,
  },
  {
    label: "Package Title",
    name: "package_title",
    required: true,
  },
  {
    label: "Delivery Time (days)",
    name: "package_duration",
    required: true,
    type: "number",
    min: 1,
    max: 90,
  },
  {
    label: "Price (€)",
    name: "package_price",
    type: "number",
    required: true,
    min: 1,
  },
];
