import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout