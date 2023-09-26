import { Inter } from "next/font/google";
import "../styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Nextra({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
