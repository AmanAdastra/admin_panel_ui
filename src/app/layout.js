import "./globals.css";
import HeadComponent from "./components/HeadComponent";

export const metadata = {
  title: "Admin Panel",
  description: "Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <>
      <HeadComponent children={children}/>
    </>
  );
}
