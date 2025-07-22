import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav style={{ background: "#949297ff", color: "white", padding: "10px" }}>
            {/* <Link to="/" style={{ color: "Black", marginRight: "20px" }}>Home</Link> */}
            <Link to="/venue" style={{ color: "Black", marginRight: "20px" }}>Venue</Link>
            <Link to="/vendors" style={{ color: "Black", marginRight: "20px" }}>Vendors</Link>
            <Link to="/photo" style={{ color: "Black", marginRight: "20px" }}>Photo</Link>
            <Link to="/realWedding" style={{ color: "Black", marginRight: "20px" }}>Real Wedding</Link>
            <Link to="/e_invites" style={{ color: "Black", marginRight: "20px" }}>E-Invites</Link>
        </nav>
    );
};

export default Navbar;
