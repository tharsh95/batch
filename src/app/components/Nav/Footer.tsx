import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { La_Belle_Aurore } from 'next/font/google';

const Footer = () => {
  return (
    <footer className='h-[10rem] flex flex-col justify-center items-center'>
        <div className='flex justify-between md:w-1/5 sm:w-3/4 w-3/4'>
           <Link href='https://www.facebook.com' target="_blank" > <AiFillFacebook size="2rem"/></Link>
            <Link href="https://www.instagram.com" target='_blank'><FaInstagram size="2rem"/></Link>
            <Link href="https://www.twitter.com" target='_blank'><FaTwitter size='2rem'/></Link>
            <Link href="https://www.linkedin.com" target='_blank'><FaLinkedin size="2rem"/></Link>
        </div>
        <div className='mt-8'>
            <p className='text-sm text-gray-500'>Copyright 2020 &copy; All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer