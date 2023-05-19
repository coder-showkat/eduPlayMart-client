import { useRef } from "react";

/* eslint-disable react/prop-types */
const EditToy = ({ selectedToy }) => {
  const { name, price, availableQty, details } = selectedToy;
  const ref = useRef();

  const handleUpdate = async (e) => {
    e.preventDefault();
    ref.current.checked = false;
  };
  return (
    <>
      <input ref={ref} type="checkbox" id="editToy" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box card w-full max-w-xl shadow-2xl bg-base-100 relative">
          <label
            htmlFor="editToy"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleUpdate} className="card-body">
            <h2 className="font-bold text-xl text-center">Toy Name: {name}</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                defaultValue={price}
                className="input input-bordered focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                placeholder="available quantity"
                defaultValue={availableQty}
                className="input input-bordered focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details Description</span>
              </label>
              <textarea
                placeholder="description"
                defaultValue={details}
                className="input input-bordered py-2 min-h-16 focus:outline-none"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditToy;
