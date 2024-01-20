export default function Spinner() {
  return (
    <div className="mx-auto max-h-[70%] max-h-[70%] py-8">
      <img
        //border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600
        className={`h-20 w-20 max-h-[100%] max-w-[100%] animate-spin mx-auto flex`}
        viewBox="0 0 18 18"
        aria-hidden="true"
        src={process.env.PUBLIC_URL + "/Icons/planter.png"}
        alt="planter"
      />
    </div>
  );
}
