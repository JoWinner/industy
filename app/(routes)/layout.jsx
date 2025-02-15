import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default async function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}
