
import Footer from "./Components/Uiux/Footer";
import Header from "./Components/Uiux/Header";
import "./globals.css";
import "./Animations.css"
import localFont from "next/font/local";
const monaSansnormal = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-MediumWide.ttf" }],

  variable: "--font-mona-sans-normal"
});
const monaSansnormallight = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-LightWide.ttf" }],

  variable: "--font-mona-sans-normallight"
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${monaSansnormallight.variable} ${monaSansnormal.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <div className="relative max-w-[1960px] m-auto overflow-hidden">
          <div className="absolute w-full top-4 z-[10]">
            <Header />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
