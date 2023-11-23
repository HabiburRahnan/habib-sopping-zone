const SectionBanner = () => {
  return (
    <div className="py-10">
      <div className="hero  bg-orange-800 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/h7VP8BK/girl-with-pearl.png"
            className="max-w-sm rounded-lg shadow-xl shadow-orange-400  bg-gradient-to-r from-indigo-600 via-purple-500 to-orange-500"
          />
          <div className="text-white py-10">
            <div className="items-center justify-center text-center">
              <h1 className="text-7xl font-bold">30% OFF ON PEARL PRODUCT!</h1>
              <p className="py-6 text-2xl">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="flex justify-center items-center py-10">
              <button className="btn  bg-orange-500 hover:bg-orange-500 text-white font-bold">
                Shop The Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
