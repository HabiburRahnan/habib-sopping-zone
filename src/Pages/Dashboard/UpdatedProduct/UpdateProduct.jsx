import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const img_hostingAPI = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // image upload to image bb and then get an url
    // const imageFile = { image: data.image[0] };
    // const res = await axiosPublic.post(img_hostingAPI, imageFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });
  };
  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subHeading="updated this item"></SectionTitle>
      <div>
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
    </div>
  );
};

export default UpdateProduct;
