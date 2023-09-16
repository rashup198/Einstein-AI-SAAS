import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        
        <Sidebar></Sidebar>
      </div>  
      <main className="md:pl-72">
        <Navbar></Navbar>
        {children}

      </main>
    </div>
  );
};

export default Layout;
