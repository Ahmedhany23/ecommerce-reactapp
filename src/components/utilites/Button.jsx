export default function Button({ text, type = 1 }) {
  return (
    <button
      className={` ${
        type === 1
          ? "bg-button-2  hover:bg-hoverButton-1"
          : "bg-button-1   hover:bg-hoverButton-2"
      } py-4 px-12 text-text-1 text-base  whitespace-nowrap`}
    >
      {text}
    </button>
  );
}
