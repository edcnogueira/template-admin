export default function Logo() {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        h-14 w-14 rounded-full
        bg-white
        
        `}
    >
      <div className="h-3 w-3 rounded-full bg-blue-600" />
      <div className="flex">
        <div className="h-3 w-3 rounded-full bg-blue-600" />
        <div className="h-3 w-3 rounded-full bg-blue-600" />
      </div>
    </div>
  );
}
