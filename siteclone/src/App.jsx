import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { Stack } from "@chakra-ui/react";


function App() {
  return (
    <Stack >
      <Navbar />
      <Outlet />
      <Footer />
    </Stack>
  );
}

export default App;
