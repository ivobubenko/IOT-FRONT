export default function Spinner(width = "20", height = "20") {
  return (
    <img
      className={`h-${height} w-${width}  py-5 px-5 flex mx-auto animate-spin `}
      viewBox="0 0 24 24"
      aria-hidden="true"
      src={process.env.PUBLIC_URL + "/Icons/planter.png"}
      alt="planter"
    />
  );
}
