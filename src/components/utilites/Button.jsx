export default function Button({ text, type = 1, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={` ${
        type === 1
          ? "bg-button-2  hover:bg-hoverButton-1 text-text-1"
          : type === 2
          ? "border border-black/50 flex items-center justify-center rounded  hover:opacity-50 transition mb-8"
          : "bg-button-1   hover:bg-hoverButton-2 text-text-1"
      } py-4 px-12  text-base  whitespace-nowrap`}
    >
      {text}
    </button>
  );
}
