import iconArrow from "@/public/assets/images/icon-arrow.svg";

const InputForm = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="day"
            className="uppercase tracking-widest text-neutral-600 font-bold"
          >
            Day
          </label>
          <input
            type="number"
            id="day"
            name="day"
            className="border px-3 py-4 accent-neutral-800 rounded-xl font-bold text-xl"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="Month"
            className="uppercase tracking-widest text-neutral-600 font-bold"
          >
            Month
          </label>
          <input
            type="number"
            id="Month"
            name="Month"
            className="border px-3 py-4 accent-neutral-800 rounded-xl font-bold text-xl"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="Year"
            className="uppercase tracking-widest text-neutral-600 font-bold"
          >
            Year
          </label>
          <input
            type="number"
            id="Year"
            name="Year"
            className="border px-3 py-4 accent-neutral-800 rounded-xl font-bold text-xl"
          />
        </div>
      </div>

      <div className="relative py-4">
        <img
          src="@/public/assets/images/icon-arrow.svg"
          alt=""
          className="p-4 bg-violet-600"
        />
      </div>
    </>
  );
};

export default InputForm;
