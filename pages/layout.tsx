import Navbar from "./navbar";

function Layout({children} : { children:any }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
}

export default Layout