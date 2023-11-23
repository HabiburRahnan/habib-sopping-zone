"use client";
import { Heart } from "phosphor-react";
import { Card } from "keep-react";
import { useState } from "react";
import { useEffect } from "react";

const BestSells = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("/section.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
      {card?.slice(0, 6).map((item, index) => (
        <Card key={index} imgSrc={item?.image} className="">
          <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
            <Heart size={20} weight="bold" color="orange" />
          </Card.Container>
          <Card.Container className="flex flex-col items-center justify-center">
            <Card.Container className="mt-10 mb-3 text-center">
              <Card.Title className=" md:text-body-4 font-bold text-metal-800 text-xl text-orange-500">
                {item?.name}
              </Card.Title>
              <Card.Title className="text-body-6 font-normal md:font-medium text-metal-400">
                {item.subtitle}
              </Card.Title>
            </Card.Container>
          </Card.Container>
        </Card>
      ))}
    </div>
  );
};

export default BestSells;
