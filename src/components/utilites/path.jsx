export default function PathComponent({ prev, path }) {
  return (
    <p className="text-black/50 text-sm font-normal px-4 flex gap-2">
      {prev}
      <span>/</span>
      <span className="text-text-3 text-opacity-100">{path}</span>
    </p>
  );
}
