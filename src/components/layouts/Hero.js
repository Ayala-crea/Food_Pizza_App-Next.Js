import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better <br /> with a&nbsp;{" "}
          <span className="text-primary">pizza</span>
        </h1>
        <p className="mt-4 text-gray-500">
          Pizza is the missing piece that makes every day complete, a single yet
          delicious joy in your life
        </p>
        <div className="flex gap-4 mt-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order Now <Right />
          </button>
          <button className="flex items-center gap-2 py-2 text-gray-500 font-semibold">
            Learn More <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-64 h-64 object-contain"
          src={"/pizza.png"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
