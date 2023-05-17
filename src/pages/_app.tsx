import { Nav } from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jakarta.className}>
      <Nav />
      <Component {...pageProps} />
    </main>
  );
}
