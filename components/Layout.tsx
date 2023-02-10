import Navbar from "/./components/Navbar.tsx"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }          
        </div>
    );
}

export default Layout;