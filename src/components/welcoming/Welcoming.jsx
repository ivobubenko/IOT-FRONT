//sk-zr6e65a4146a284b33778

import { useEffect, useState } from "react";

export default function Welcoming() {
  const [plantsData, setPlantsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          ""
          //"https://perenual.com/api/species-list?key=sk-zr6e65a4146a284b33778"
        );
        if (!res.ok) {
          return;
        }
        const data = await res.json();
        setPlantsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plantsData?.data &&
            plantsData.data.map((plant) => (
              <article
                key={plant.id}
                className="flex max-w-xl mx-auto flex-col items-start justify-around hover:shadow py-2 px-2"
              >
                <div className="relative mt-8 flex items-center gap-x-4 ">
                  <img
                    src={plant?.default_image?.small_url}
                    alt=""
                    className="h-15 w-15 rounded-full bg-gray-50"
                  />
                </div>
                <div className="w-full text-left py-2 border-b-2">
                  <h1>{plant.common_name}</h1>
                </div>
                <div className="flex w-full text-left py-2 border-b-2">
                  <img
                    className="h-8 w-8 object-cover mr-2"
                    aria-hidden="true"
                    src={process.env.PUBLIC_URL + "/Icons/sun.png"}
                    alt="sun"
                  />
                  <span className="content-center">
                    {plant.sunlight.map((el) => el).join(",")}
                  </span>
                </div>
                <div className="flex w-full text-left py-2 border-b-2">
                  <img
                    className="h-8 w-8 object-cover mr-2"
                    aria-hidden="true"
                    src={process.env.PUBLIC_URL + "/Icons/watering.png"}
                    alt="sun"
                  />
                  <span className="content-center">
                    Watering frequency: {plant.watering}
                  </span>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
