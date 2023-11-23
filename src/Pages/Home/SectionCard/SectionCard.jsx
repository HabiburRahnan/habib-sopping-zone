import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const SectionCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("/section.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <Marquee pauseOnHover={true} speed={20}>
      <div className="flex gap-20 ">
        {card.slice(0, 6).map((item, index) => (
          <Paper key={index} elevation={3}>
            <div className="card w-96  shadow-xl cursor-pointer group">
              <figure>
                <img
                  className="rounded-full w-80 h-72 group-hover:scale-110 "
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.subtitle}</p>
                <div className="flex py-1">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p className="font-bold flex justify-end ">
                    Price: {item.price}
                  </p>
                </div>
                <div className="card-actions flex justify-between items-center ">
                  <button className="btn bg-[#ca841a] hover:bg-orange-400  text-white font-medium">
                    Add To Card
                  </button>
                  <button className="btn bg-orange-400 hover:bg-orange-500 text-white font-medium">
                    Quick Shop
                  </button>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    </Marquee>
  );
};

export default SectionCard;
