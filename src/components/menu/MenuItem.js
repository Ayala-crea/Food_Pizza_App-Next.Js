export default function MenuItem() {
  return (
    <div className=" p-4 rounded-lg text-center
    group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="text-center">
        <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
        </div>
      <h4 className="font-semibold text-xl my-2">paperroni pizza</h4>
      <p className="text-gray-500 text-sm">
        pizza paperroni yang enak dan penuh dengan keju gurih.
      </p>
      <button
        className=" mt-4 bg-primary text-white rounded-full 
          px-6 py-2"
      >
        Add to cart Rp.12.000
      </button>
    </div>
  );
}
