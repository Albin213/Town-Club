export default function Gallery() {
  return (
    <div className="pt-32 px-6">
      <h1 className="text-4xl text-center font-bold text-violet-400">
        Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-6 my-12">
        {[1,2,3,4,5,6].map((i) => (
          <img
            key={i}
            src={`https://picsum.photos/500/400?random=${i}`}
            className="rounded-xl hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
}