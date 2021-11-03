import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Header.css";

const Header = () => {
    const {user,logOut} = useAuth();
    const profilePic = user.photoURL;
    return (
        <div className="sticky-top header__container bg-light py-1">
            <Navbar className="navbar_container" expand="lg">
                <Container fluid>
                        <Link to="/home">
                            <Navbar.Brand>
                                <div className="logo">
                                    <img width="90%" src="https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg?size=338&ext=jpg" alt="logo" />
                                </div>
                            </Navbar.Brand>
                        </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                            className="mx-auto my-2 my-lg-0 navbar__container"
                        >
                            <Nav.Link className="nav-item">
                                <Link to="/home" class="nav-link">Home</Link>
                            </Nav.Link>
                            
                            <Nav.Link class="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </Nav.Link>
                                
                            {
                                user.email && <Nav.Link className="nav-item">
                                    <Link className="nav-link" to="/myOrders">My Orders</Link>
                                </Nav.Link>
                            }
                    </Nav>
                    <div className="d-flex justify-content-around align-items-center">
                            {
                                user.email && <div className="d-flex justify-content-around align-items-center">
                                    <div className="w-25">
                                        <img className="rounded-circle img-fluid" src={profilePic} alt="" />
                                    </div>
                                    <h5 className="mx-2">{user.displayName}</h5>
                                </div>
                            }
                            {
                                user.email && <Link to="/admin">
                                    <button className="btn__register">Admin</button>
                                </Link>
                            }
                            {
                                user.email ?
                                <button type="button" onClick={logOut} className="btn__regular">LogOut</button>:
                                <Link to="/login">
                                <button className="btn__regular">Login</button>
                                </Link>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </div>
    );
};

export default Header;