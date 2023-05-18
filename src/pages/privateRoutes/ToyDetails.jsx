import Breadcrumb from "../../components/Breadcrumb";

const ToyDetails = () => {
  return (
    <div>
      <Breadcrumb heading="Toy">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
    </div>
  );
};

export default ToyDetails;
