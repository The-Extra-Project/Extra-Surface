import Image from "next/image";
import Head from "next/head";
import extra_logo from "src/public/extra_logo.png"
import styles  from "./header.module.css"
import Link from "next/link"
export default function Header() {
return(
    <header className="flex items-center justify-between bg-black-700 px-4 py-3 text-white md:px-6">
        <span className="ml-2 text-lg font-medium text-black ">
        <Link href={"/"}></Link>
        </span>
            <Image src={extra_logo} width={100} height={100} alt="Extra surface logo" />
            <div className="icon"></div> 
    </header>
)
}