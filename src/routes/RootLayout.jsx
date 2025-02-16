import MainHeader from "../components/mainHeader.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
