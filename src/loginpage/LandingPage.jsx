import LoginButton from "../auth/LoginButton";
const imageUrl =
  "https://images.pexels.com/photos/1105017/pexels-photo-1105017.jpeg";

const containerStyle = {
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function LandingPage() {
  return (
    <div
      style={containerStyle}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to Smart Pot
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your personalized solution for smart plant care.
        </p>
        <div className="w-full max-w-md p-6 bg-gray-100 rounded-md shadow-md">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
