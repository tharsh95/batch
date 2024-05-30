"use client";
import React, { useState } from "react";
import WorkPosts from "./WorkPosts";
import { work } from "../../../../blogPosts.json";

const Section = () => {
  const [data, setData] = useState(work);
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value.toLowerCase();
    const filteredData = work.filter((item) =>
      item.title.toLowerCase().includes(searchString)
    );
    if (searchString === "") {
      setData(work);
    } else {
      setData(filteredData);
    }
  };
  return (
    <React.Fragment>
      <div className="flex flex-col items-center   ">
        <div className="lg:w-1/2 w-3/4 ">
          <div className="flex justify-between">
            <h1 className="text-3xl font-extrabold">Work</h1>
            <input
              type="text"
              placeholder="Search by Title"
              onChange={(e) => handleSearch(e)}
              className="p-2 rounded-3xl border-2"
            />
          </div>
          <div className="mt-8">
            {data.map((el) => (
              <div
                key={el.id}
                className="flex flex-col  justify-evenly sm:h-[60vh] h-[60vh] md:h-[30vh]"
              >
                <WorkPosts
                  title={el.title}
                  date={el.date}
                  author={el.author}
                  description={el.description}
                  thumbnail={el.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section;
