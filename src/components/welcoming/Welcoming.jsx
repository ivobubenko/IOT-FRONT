const features = [
  {
    name: "Creators",
    description:
      "Ivan Brťka, Ivan Čabra, Ivo Bubeňko, Alexander Bodnár, Michal Lešo",
  },
  {
    name: "Add new device",
    description:
      "If you have bought a new device, click on Add new device, create name for your pot, add ID from bought pot and select plant which will be stored in pot",
  },
  {
    name: "Connect with your family and friends",
    description:
      "You can anytime give your friends ID of the pot so they can watch its status. Dont worry, only owner (you) can delete pot",
  },

  {
    name: "Notifications",
    description:
      "When pot runs out of water, you will be notified to fill up the tank.",
  },
];

export default function Welcoming() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Manual
          </h2>
          <p className="mt-4 text-gray-500">
            This is Smart-Pot. It gives you remote access to your plant,
            informations about plant health and soil status. You just need your
            mobile and you are set to go.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
          <img
            src={process.env.PUBLIC_URL + "pot_1.png"}
            alt="Pot 1"
            className="rounded-lg bg-gray-100 "
          />
          <img
            src={process.env.PUBLIC_URL + "pot_2.png"}
            alt="Pot 2"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={process.env.PUBLIC_URL + "pot_3.png"}
            alt="Pot 3"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={process.env.PUBLIC_URL + "pot_4.png"}
            alt="Pot 4"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
