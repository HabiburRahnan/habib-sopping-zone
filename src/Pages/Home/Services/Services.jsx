("use client");

import { Card } from "keep-react";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ml-5 mt-5">
      {services?.map((item) => (
        <Card
          key={item.id}
          className="md:p-6 p-5 max-w-[280px] border  my-10 shadow-lg shadow-red-950 bg-white">
          <Card.Container className="flex items-center justify-center">
            <img className="w-20" src={item.image} alt="" />
          </Card.Container>
          <Card.Container className="text-center">
            <Card.Title className="text-2xl font-bold pb-2 -mt-4">
              {item.title}
            </Card.Title>
            <Card.Description className=" font-semibold">
              {item.description}
            </Card.Description>
          </Card.Container>
        </Card>
      ))}
    </div>
  );
};

export default Services;
