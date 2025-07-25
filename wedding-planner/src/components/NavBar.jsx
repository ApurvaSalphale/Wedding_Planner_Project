import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#ca76fbff",
        color: "black",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
      }}
    >
      
      <div>
        <Link to="/venue" style={{ color: "white", marginRight: "20px" }}>Venue</Link>
        <Link to="/vendors" style={{ color: "white", marginRight: "20px" }}>Vendors</Link>
        <Link to="/photo" style={{ color: "white", marginRight: "20px" }}>Photo</Link>
        <Link to="/realWedding" style={{ color: "white", marginRight: "20px" }}>Real Wedding</Link>
        <Link to="/e_invites" style={{ color: "white", marginRight: "20px" }}>E-Invites</Link>
      </div>

     
      <div>
        <Link to="/register" style={{ color: "white", marginRight: "20px" }}>Register</Link>
        <Link to="/login" style={{ color: "white" }}>Login</Link>
      </div>
    </nav>

    
  );
};

export default Navbar;
