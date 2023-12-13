import bike from "../../assets/micromobility.png";
import vendor from "../../assets/bolt-food-app-a5cfc44ac3e2354096df31b33e93fe28.webp";

const Service = () => {
  return (
    <div className="mt-[120px] flex flex-col items-center">
      <div className="text-[36px] font-bold">Our Service</div>

      <div className="grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-purple-700 p-6 h-[200px] flex flex-col justify-between">
          <div>
            <div className="text-[rgb(47,49,63)] text-[27px]">Delivery</div>
            <div className="text-sm">
              Your favourite Groceries, delivered fast.
            </div>
          </div>

          <img src={bike} className="w-[100px] self-end" alt="" />
        </div>

        <div className="rounded-2xl bg-purple-700p-6 h-[200px] flex flex-col justify-between">
          <div>
            <div className="text-[rgb(47,49,63)] text-[27px]">Employment</div>
            <div className="text-sm">Job provided for many</div>
          </div>

          <img src={vendor} className="w-[90px] self-end" alt="" />
        </div>

        <div className="rounded-2xl bg-purple-700 p-6 h-[200px] flex flex-col justify-between">
          <div>
            <div className="text-[rgb(47,49,63)] text-[27px]">Growth</div>
            <div className="text-sm">Business Growth for our vendors</div>
          </div>

          <img src={bike} className="w-[100px] self-end" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
