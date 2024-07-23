import Image from "next/image";
import Head from "next/head";
import extra_logo from "src/public/extra_logo.svg";
import Link from "next/link";
export default function Header() {
	return (
		<header className="flex bg-white px-4 py-3 text-white md:px-6">
            <Link href={"/"}>
                <Image src={extra_logo} width={150} alt="Extra surface logo" />
            </Link>
		</header>
	);
}
