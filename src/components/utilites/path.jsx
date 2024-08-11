export default function PathComponent({ prev, path }) {
  return (
    <div className="">
  <p className="text-black/50 text-sm font-normal    gap-2 inline">
      {prev}
      <span className="ml-1">/</span>
    </p>
   
    <span className="text-text-3 text-opacity-100 ml-1">{path.slice(0,25)}</span>
    </div>
  
  );
}
