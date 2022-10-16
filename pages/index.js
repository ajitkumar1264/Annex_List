import Head from "next/head";
import Image from "next/image";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-10 ">
        <div className="px-20  ">
          <div className="mb-5">
            <h1 className=" text-3xl font-semibold">Hello, Ajitkumar 👋</h1>
          </div>
          <div className=" mt-10">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              magni velit unde quae nemo minus? Ipsa sunt fugit inventore
              officia possimus numquam ullam perspiciatis animi sed quaerat.
              Eaque quisquam, molestias ad architecto fugit, tempore quibusdam
              temporibus accusantium qui nam culpa corporis labore cum quia
              earum.
            </p>
            
         
        <div className="box border-4 p-5 w-52 mt-10 rounded-lg border-black bg-gray-200">
        <Link href="/ajit" className="text-2xl">
          <a>go to the ajitkumar list</a>
        </Link>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
