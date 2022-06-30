import Header from "./../component/header/Header";
import Navbar from "./../component/navbar/Navbar";
import Footer from "./../component/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
