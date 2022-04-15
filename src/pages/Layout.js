import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><Button>Home</Button></Link>
          </li>
          <li>
            <Link to="/second"><Button>Second</Button></Link>
          </li>
          <li>
            <Link to="/increment"><Button>Increment</Button></Link>
          </li>
          <li>
            <Link to="/decrement"><Button>Decrement</Button></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
