import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // image upload to image bb and then get an url
    const imageFile = { image: data.image[0] };
    console.log(data, imageFile);
  };
  return (
    <div>
      <SectionTitle
        heading="add a Jewellery"
        subHeading="Whats New"></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product Name*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              required
              placeholder="Product Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="md:flex justify-center items-center gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("Category", { required: true })}
                className="select select-bordered w-full">
                <option disabled defaultValue={"Select"}>
                  Select a Category
                </option>
                <option value="Ring">Ring</option>
                <option value="Bracelet">Bracelet</option>
                <option value="Earring">Earring</option>
                <option value="Necklaces">Necklaces</option>
                <option value="Bangles">Bangles</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("Price")}
                type="number"
                required
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product Details*</span>
            </label>
            <textarea
              required
              {...register("product")}
              placeholder="Product Details"
              className="textarea textarea-bordered textarea-lg w-full "></textarea>
          </div>
          <div className="form-control  md:w-full my-6">
            <label className="label">
              <span className="label-text">Product Image*</span>
            </label>
            <input
              {...register("image")}
              required
              type="file"
              className="file-input md:w-full "
            />
          </div>

          <button
            type="submit"
            className="flex btn w-full bg-gradient-to-r from-orange-400 text-white font-bold to-orange-500 gap-5">
            add a Jewellery
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
