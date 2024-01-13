import SignUpMenu from "../auth/SignupMenu";
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
        <SignUpMenu />
      </div>
    </div>
  );
}
