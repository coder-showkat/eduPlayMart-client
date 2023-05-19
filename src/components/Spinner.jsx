import { BarLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <BarLoader
        color="#FEBF00"
        speedMultiplier={1.5}
        height={10}
        width={200}
      />
    </div>
  );
};

export default Spinner;
