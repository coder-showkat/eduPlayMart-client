const AddAToy = () => {
  const handleAdd = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="card w-full max-w-3xl mx-auto custom-shadow bg-base-200 my-10">
      <form onSubmit={handleAdd} className="card-body">
        <h2 className="font-bold text-xl text-center">Add A Toy</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="image url"
            className="input input-bordered focus:outline-none"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input
            type="text"
            placeholder="toy name"
            className="input input-bordered focus:outline-none"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1 form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              className="input input-bordered focus:outline-none"
            />
          </div>
          <div className="flex-1 form-control">
            <label className="label">
              <span className="label-text">Subcategory</span>
            </label>
            <select
              className="select select-bordered w-full focus:outline-none font-normal"
              defaultValue=""
            >
              <option value="" disabled>
                subcategory
              </option>
              <option>Toys & Games</option>
              <option>Puzzle Toys</option>
              <option>Development Toys & Kits</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1 form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="available quantity"
              className="input input-bordered focus:outline-none"
            />
          </div>
          <div className="flex-1 form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <select
              className="select select-bordered w-full focus:outline-none font-normal"
              defaultValue=""
            >
              <option value="" disabled>
                rating
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details Description</span>
          </label>
          <textarea
            placeholder="description"
            className="input input-bordered py-2 min-h-16 focus:outline-none"
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
