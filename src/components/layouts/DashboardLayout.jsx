import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-[250px] h-full bg-gray-800 text-white p-6 shadow-lg z-50">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-[250px] w-full p-6 pt-24"> {/* ml-[250px] pour compenser la largeur du Sidebar */}
        {/* Header */}
        <Header />

        {/* Contenu principal injecté via children */}
        {children} {/* Affiche le contenu du Dashboard */}
      </div>
    </div>
  );
};

export default DashboardLayout;

