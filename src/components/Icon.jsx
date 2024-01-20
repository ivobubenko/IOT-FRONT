export default function Icon({ src, alt, text }) {
  return (
    <div className="justify-self-start min-w-12 min-h-12 inline mx-auto">
      <img
        className="h-6 w-6 object-cover inline"
        aria-hidden="true"
        src={process.env.PUBLIC_URL + `/Icons/${src}.png`}
        alt={alt}
      />
      {text}
    </div>
  );
}
