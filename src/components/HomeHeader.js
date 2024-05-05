import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
    return (
        <header className="p-3 pl-6 text-sm">
            <div className="flex items-center justify-between">
                <Link href={"/"} className="hover:underline">
                    À propos
                </Link>
                <div className="flex space-x-4 items-center">
                    <Link
                        href={"https://mail.google.com"}
                        className="hover:underline"
                    >
                        Gmail
                    </Link>
                    <Link
                        href={"https://image.google.com"}
                        className="hover:underline"
                    >
                        Images
                    </Link>
                    <TbGridDots className="text-4xl p-2 bg-transparent hover:bg-gray-200 rounded-full" />
                    <button className="bg-gray-700 text-white px-5 py-2 font-medium rounded-md hover:brightness-105 hover:bg-gray-800 hover:shadow-md transition-shadow">
                        Connexion
                    </button>
                </div>
            </div>
        </header>
    );
}
