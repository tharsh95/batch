import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='h-[10rem] flex flex-col justify-center items-center'>
        <div className='flex justify-between md:w-1/5 sm:w-3/4 w-3/4'>
            <AiFillFacebook size="2rem"/>
            <FaInstagram size="2rem"/>
            <FaTwitter size='2rem'/>
            <FaLinkedin size="2rem"/>
        </div>
        <div className='mt-8'>
            <p className='text-sm text-gray-500'>Copyright 2020 &copy; All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer