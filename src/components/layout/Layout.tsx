import Footer from "components/layout/Footer";
import AppRoutes from "components/layout/AppRoutes";
import NavBar from "components/layout/navBar/NavBar";

const Layout = () => {
 return (
  <div className="flex flex-col h-screen justify-between">
   <header>
    <NavBar />
   </header>
   <main className="overflow-auto mb-auto">
    <AppRoutes />
   </main>
   <Footer />
  </div>
 );
};

export default Layout;
