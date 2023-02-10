import Navbar from "/./components/Navbar.js"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }          
        </div>
    );
}

export default Layout;