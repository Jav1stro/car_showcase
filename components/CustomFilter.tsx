import React from "react";

interface CustomFilterProps {
  title: string;
}

const CustomFilter = ({ title }: CustomFilterProps) => {
  return <div>{title}</div>;
};

export default CustomFilter;
