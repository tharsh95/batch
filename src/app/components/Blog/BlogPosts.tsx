"use client";

import Image from "next/image";
import React from "react";
type BlogProps = {
  title: string;
  date: string;
  author: string;
  description: string;
  thumbnail?:string;

};
const BlogPosts = ({ title, date, author, description }: BlogProps) => {
  return (
    <>

    <div className="hover:scale-110 duration-500 transition-transform flex flex-col justify-between h-5/6 ">
      <div>

        <h1 className="font-bold sm:text-xl text-xl lg:text-3xl">{title}</h1>
      </div>
      <div className="flex justify-between w-[15rem]">
        <span className="font-bold text-xl">{date}</span>
        <span className="border-r border-gray-500 mx-4"></span>
        <span className="text-gray-400 text-xl ">{author}</span>
      </div>
      <div className="h-fit">{description}</div>
    </div>
      <div className="border-b border-gray-300"></div>
    </>
  );
};

export default BlogPosts;
