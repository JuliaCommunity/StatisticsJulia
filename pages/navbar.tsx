import Link from "next/link";

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/map">
              Map
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;