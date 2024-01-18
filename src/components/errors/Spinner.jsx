export default function Spinner(width = "8", height = "8") {
  return (
    <img
      className={`max-h-${height} max-w-${width} flex mx-auto animate-spin `}
      viewBox="0 0 24 24"
      aria-hidden="true"
      src={process.env.PUBLIC_URL + "/Icons/planter.png"}
      alt="planter"
    />
  );
}
