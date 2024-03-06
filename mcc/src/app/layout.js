// import { Inter } from "next/font/google";
// import "./globals.scss";
// import styles from '../styles/main.scss';
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="sr_hidden">
                    <Link href="/">MCC</Link>
                </div>
                {children}
            </body>
        </html>
    );
}
