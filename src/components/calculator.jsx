import { useForm } from "react-hook-form";
import { useState } from "react";
import frame from "../assets/Frame 30.svg";
// import Imgover from "./imghover";

const Calculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [diffAge, setDiffAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const submittedDate = new Date(
      `${data.number2}/${data.number}/${data.text}`
    );
    if (isNaN(submittedDate.getTime())) {
      console.error("Invalid date format");

      return;
    }

    const currentDate = new Date();

    const timeDifference = currentDate - submittedDate;

    const yearsDifference = Math.floor(
      timeDifference / (365.25 * 24 * 60 * 60 * 1000)
    );
    const monthsDifference = Math.floor(
      (timeDifference % (365.25 * 24 * 60 * 60 * 1000)) /
        (30.44 * 24 * 60 * 60 * 1000)
    );
    const daysDifference = Math.floor(
      (timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
    );

    setDiffAge({
      years: yearsDifference,
      months: monthsDifference,
      days: daysDifference,
    });

    console.log(
      `Years: ${yearsDifference}, Months: ${monthsDifference}, Days: ${daysDifference}`
    );
  };

  const handleDayChange = (event) => {
    const input = event.target.value;

    if (/^\d{0,2}$/.test(input)) {
      setDay(input);
    }
  };

  const handleMonthChange = (event) => {
    const input = event.target.value;

    if (/^\d{0,2}$/.test(input)) {
      setMonth(input);
    }
  };

  const handleYearChange = (event) => {
    const input = event.target.value;

    if (/^\d{0,4}$/.test(input)) {
      setYear(input);
    }
  };

  return (
    <div className="font">
      <div
        className="w-[52.5rem] m-auto mt-[10rem] bg-white p-[3.5rem] h-[40.6875rem] rounded-[1.5rem] rounded-br-[12.5rem]
      max-sm:w-[21.4375rem] max-sm:h-[30.375rem] max-sm:py-[3rem] max-sm:px-[1.5rem]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            <div className="leading-10">
              <h1
                className={`text-[0.975rem] font-[700] text-[#716F6F] max-sm:text-[0.75rem] max-sm:tracking-[0.1875rem]  ${
                  errors.number && "text-[#FF5959]"
                }`}>
                DAY
              </h1>
              <input
                className={`h-[4.5rem] w-[10rem] gap-[1rem] py-[0.75rem] px-[1.5rem]
               text-[2rem] font-[700] rounded-[0.5rem] border-2 border-[#DCDCDC]
               cursor-pointer
               max-sm:h-[3.375rem] max-sm:w-[5.47915rem] max-sm:text-[1.25rem] 
               max-sm:px-[1rem] ${errors.number && "border-[#FF5959]"}`}
                {...register("number", {
                  required: true,
                  pattern: /^\d{1,2}$/,
                  min: 1,
                  max: 31,
                })}
                type="number"
                value={day}
                onChange={handleDayChange}
                placeholder="DD"
                pattern="\d*"
              />
              <div>
                {errors?.number?.type === "required" ||
                  errors?.number?.type === "pattern" ||
                  errors?.number?.type === "min" ||
                  (errors?.number?.type === "max" && (
                    <p className="text-[#FF5959]">Must be a valid day</p>
                  ))}
              </div>
            </div>
            <div className="leading-10 ">
              <h1
                className={`text-[0.975rem] font-[700] text-[#716F6F] max-sm:text-[0.75rem] max-sm:tracking-[0.1875rem] ${
                  errors.number && "text-[#FF5959]"
                }`}>
                MONTH
              </h1>

              <input
                className={`h-[4.5rem] w-[10rem]  gap-[1rem] py-[0.75rem] px-[1.5rem]
               text-[2rem] font-[700] rounded-[0.5rem] border-2 border-[#DCDCDC]
               max-sm:h-[3.375rem] max-sm:w-[5.47915rem] max-sm:text-[1.25rem] 
               max-sm:px-[1rem]
              ${errors.number && "border-[#FF5959]"}`}
                {...register("number2", {
                  required: true,
                  pattern: /^\d{1,2}$/,
                  min: 1,
                  max: 12,
                })}
                type="number2"
                value={month}
                onChange={handleMonthChange}
                placeholder="MM"
                pattern="\d*"
              />
              <div>
                {errors?.number2?.type === "required" ||
                  errors?.number2?.type === "pattern" ||
                  errors?.number2?.type === "min" ||
                  (errors?.number2?.type === "max" && (
                    <p className="text-[#FF5959]">Must be a valid month</p>
                  ))}
              </div>
            </div>
            <div className="leading-10">
              <h1
                className={`text-[0.975rem] font-[700] text-[#716F6F] max-sm:text-[0.75rem] max-sm:tracking-[0.1875rem]
                ${errors.number && "text-[#FF5959]"}`}>
                YEAR
              </h1>
              <input
                className={`h-[4.5rem] w-[10rem]  gap-[1rem] py-[0.75rem] px-[1.5rem]
              text-[2rem] font-[700] rounded-[0.5rem] border-2 border-[#DCDCDC]  max-sm:h-[3.375rem] max-sm:w-[5.47915rem] max-sm:text-[1.25rem] 
              max-sm:px-[1rem]
              ${errors.number && "border-[#FF5959]"}`}
                {...register("text", {
                  required: true,
                  pattern: /^\d{1,4}$/,
                  min: 1,
                  max: new Date().getFullYear(),
                })}
                type="text"
                value={year}
                onChange={handleYearChange}
                pattern="\d*"
                placeholder="YYYY"
              />
              <div>
                {errors?.number?.type === "required" ||
                  errors?.text?.type === "pattern" ||
                  (errors?.text?.type === "min" && (
                    <p className="text-[#FF5959]">Must be a valid past</p>
                  ))}
                {errors?.text?.type === "max" && (
                  <p className="text-[#FF5959]">
                    Must be a valid past {new Date().getFullYear()}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <button className="flex max-sm:self-stretch items-center  relative  max-sm:mt-5">
              <div className="w-[39.5rem] m-auto h-[0.0625rem] bg-[#DCDCDC] max-sm:self-stretch max-sm:w-[18.4375rem]"></div>
              <img
                className="items-center hover:text-black max-sm:w-[4rem] max-sm:h-[4rem] max-sm:ml-[-11rem] relative  justify-center  "
                src={frame}
                alt=""
              />
              {/* <div className="text-[#854DFF] hover:text-black">
                {/* <Imgover color="#854DFF" '/> */}
              {/* </div> */}
            </button>
          </div>
        </form>
        <div className="leading-[7.15rem] font-poppins italic max-sm:leading-[3.85rem]  ">
          <div className="flex font-[800] text-[6.5rem] gap-[0.5rem] self-stretch max-sm:text-[3.5rem]">
            <div className="text-[#854DFF] tracking-[1rem]  max-sm:tracking-[-0.07rem] ">
              {diffAge?.years ? diffAge?.years : "--"}
            </div>
            <div className="tracking-[-0.13rem] max-sm:tracking-[-0.07rem] ">
              years
            </div>
          </div>
          <div className="flex font-[800] text-[6.5rem] gap-[0.5rem] self-stretch max-sm:text-[3.5rem]">
            <div className="text-[#854DFF] tracking-[1rem] max-sm:tracking-[-0.07rem] ">
              {diffAge?.months ? diffAge?.months : "--"}
            </div>
            <div className="tracking-[-0.13rem] max-sm:tracking-[-0.07rem]">
              month
            </div>
          </div>
          <div className="flex font-[800] text-[6.5rem] gap-[0.5rem] self-stretch max-sm:text-[3.5rem]">
            <div className="text-[#854DFF] tracking-[1rem] max-sm:tracking-[-0.07rem] ">
              {diffAge?.days ? diffAge?.days : "--"}
            </div>
            <div className="tracking-[-0.13rem] max-sm:tracking-[-0.07rem] font-rubik">
              days
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[40rem] h-[5rem] bg-black m-auto rounded-tr-[4rem] 
        rounded-bl-[4rem] rounded-2xl font-sans
         bg-gradient-to-r from-green-500  to-blue-500 
          hover:from-pink-500 hover:to-yellow-500 cursor-pointer
           max-sm:w-[20rem] max-sm:h-[4rem]">
        <h1
          className="m-auto pt-5 w-[30rem] italic text-white 
         h-24 text-[1.5rem] font-bold mt-10  text-center
         max-sm:w-[19rem] max-sm:text-[1rem]">
          Coded by farook Adventures.
        </h1>
      </div>
    </div>
  );
};

export default Calculator;
