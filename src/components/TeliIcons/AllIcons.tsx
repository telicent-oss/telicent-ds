import React from "react";
import TeliAddIcon from "./TeliAddIcon";
import TeliCloseIcon from "./TeliCloseIcon";
import TeliDeleteIcon from "./TeliDeleteIcon";
import TeliEditIcon from "./TeliEditIcon";
import TeliSearchIcon from "./TeliSearchIcon";
import { TeliSortAZIcon, TeliSortZAIcon } from "./TeliSortIcons";
import ClockRotateLeft from "./ClockRotateLeft";

const Icon: React.FC<{
  icon: React.ReactNode;
  label: string;
}> = ({ icon, label }) => (
  <div className="flex flex-col items-center space-y-2">
    {icon}
    <p className="text-center">{label}</p>
  </div>
);

const AllIcons = () => (
  <div className="grid grid-cols-12">
    <Icon icon={<TeliAddIcon />} label="Add" />
    <Icon icon={<TeliCloseIcon />} label="Close" />
    <Icon icon={<TeliDeleteIcon />} label="Delete" />
    <Icon icon={<TeliEditIcon />} label="Edit" />
    <Icon icon={<TeliSearchIcon />} label="Search" />
    <Icon icon={<TeliSortAZIcon />} label="Sort AZ" />
    <Icon icon={<TeliSortZAIcon />} label="Sort ZA" />
    <Icon icon={<ClockRotateLeft />} label="Clock rotate left" />
  </div>
);

export default AllIcons;
