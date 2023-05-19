import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Blogs = () => {
  return (
    <>
      <Breadcrumb heading="Blogs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Blogs</li>
        </ul>
      </Breadcrumb>
    </>
  );
};

export default Blogs;
