"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
type WorkProps = {
  title: string;
  date: string;
  author: string;
  description: string;
  thumbnail: string;
};
const WorkPosts = ({
  title,
  date,
  author,
  description,
  thumbnail,
}: WorkProps) => {
  return (
    <React.Fragment>
      <div className="hover:scale-110 duration-500 transition-transform md:flex">
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Image src={thumbnail} alt={title} width={300} height={300} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogDescription>
                  <Image src={thumbnail} alt={title} width={999} height={999} />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="md:ml-6 ">
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <div className="flex items-center">
            <h1 className="mr-6 text-white bg-blue-900 rounded-2xl p-1">
              {date}
            </h1>
            <h1 className="text-gray-500">{author}</h1>
          </div>
          <div className="mt-4">
            <h1 className="text-lg">{description}</h1>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 "></div>
    </React.Fragment>
  );
};

export default WorkPosts;
