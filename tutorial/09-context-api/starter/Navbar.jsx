import NavLinks from "./NavLinks";
import { useState, createContext } from "react";
import { useContext } from "react";

export const NavbarContext = createContext();

// Custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
	const [user, setUser] = useState({ name: "bob" });
	const logout = () => {
		setUser(null);
	};

	return (
		<NavbarContext.Provider value={{ user, logout }}>
			<nav className="navbar">
				<h5>CONTEXT API</h5>
				<NavLinks />
			</nav>
		</NavbarContext.Provider>
	);
};
export default Navbar;
