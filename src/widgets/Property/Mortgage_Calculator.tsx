"use client";
import { Slider } from "@/components/ui/slider";
import AnimatedButton from "@/shared/AnimatedButton";
import SelectCurrencies from "@/shared/SelectCurrenciesFooter";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface Mortgage_CalculatorI {
  Price: number;
}

const Mortgage_Calculator = ({ Price }: Mortgage_CalculatorI) => {
  const [Open, setOpen] = useState(false);
  const [LoanAmount, setLoanAmount] = useState(Price);
  const [LoanPeriod, setLoanPeriod] = useState(20);
  const [InterestRate, setInterestRate] = useState(4);
  const [DownPayment, setDownPayment] = useState((Price * 25) / 100);

  const monthlyInterestRate = InterestRate / 100 / 12;

  const MonthlyPayment =
    ((LoanAmount - DownPayment) * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -(LoanPeriod * 12)));

  const [userInfo, setuserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const router = useRouter();
  const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loanAmount = JSON.stringify(
      `Loan Amount: ${LoanAmount.toLocaleString()} AED %0A`
    );
    const downPayment = JSON.stringify(
      `Down Payment: ${DownPayment.toLocaleString()} AED %0A`
    );
    const loanPeriod = JSON.stringify(
      `Loan Period: ${LoanPeriod.toLocaleString()} Years %0A`
    );
    const interestRate = JSON.stringify(
      `Interest Rate: ${InterestRate.toLocaleString()} Percent %0A`
    );
    const monthlyPayment = JSON.stringify(
      `Monthly Payment: ${MonthlyPayment.toLocaleString()} AED %0A`
    );

    router.push(
      (
        "https://mail.google.com/mail/?view=cm&fs=1&to=" +
        process.env.NEXT_PUBLIC_EMAIL +
        "&body=" +
        loanAmount +
        downPayment +
        loanPeriod +
        interestRate +
        monthlyPayment
      ).replaceAll('"', "")
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-medium">Mortgage Calculator</h3>
      <div className="w-full flex justify-between max-md:hidden">
        <p>Calculate and view the monthly mortgage</p>
        <div className="flex items-center gap-4">
          <h6 className="whitespace-nowrap">Your Payout Currency</h6>
          <SelectCurrencies css="!min-w-[70px] !h-[40px]" SqFtBox={false} />
        </div>
      </div>
      {/* Calculator */}
      <div className="flex sm:flex-row flex-col rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 flex flex-col md:gap-10 gap-7 bg-[#f9f9f9] p-7">
          <Calculator_Slider
            CurrencyType={"AED"}
            title="Loan Amount (AED)"
            SliderValue={LoanAmount}
            setSliderValue={setLoanAmount}
            min={300000}
            max={50000000}
            steps={10000}
          />
          <Calculator_Slider
            CurrencyType={"AED"}
            title="Down Payment (AED)"
            SliderValue={DownPayment}
            setSliderValue={setDownPayment}
            min={(Price * 10) / 100}
            max={(Price * 90) / 100}
            steps={10000}
            withPercentage
          />
          <Calculator_Slider
            CurrencyType={"years"}
            title="Loan Period (Years)"
            SliderValue={LoanPeriod}
            setSliderValue={setLoanPeriod}
            min={3}
            max={30}
            steps={1}
          />
          <Calculator_Slider
            CurrencyType={"%"}
            title="Interest Rate (%)"
            SliderValue={InterestRate}
            setSliderValue={setInterestRate}
            min={2}
            max={15}
            steps={0.1}
          />
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col max-sm:gap-6 justify-between text-white bg-primary p-7">
          <div className="md:space-y-1">
            <h3 className="md:text-xl text-lg">Monthly Payment</h3>
            <h2 className="md:text-[38px] text-[26px] leading-none font-semibold">
              {MonthlyPayment.toLocaleString()} AED
              {/* 26,814.63 AED */}
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex md:flex-row flex-col justify-between md:items-center">
              <h5 className="md:text-sm text-xs">Total Loan Amount</h5>
              <h4 className="md:text-2xl text-base font-medium">
                {(LoanAmount - DownPayment).toLocaleString()}.00 AED
              </h4>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:items-center">
              <h5 className="md:text-sm text-xs">Interest</h5>
              <h4 className="md:text-2xl text-base font-medium">
                {InterestRate}%
              </h4>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:items-center">
              <h5 className="md:text-sm text-xs">Loan Period</h5>
              <h4 className="md:text-2xl text-base font-medium">
                {LoanPeriod} years
              </h4>
            </div>
            {/* Calculator Popup */}
            <Dialog open={Open} onOpenChange={() => setOpen(!Open)}>
              <DialogTrigger asChild className="md:max-w-[240px]">
                <div>
                  <AnimatedButton
                    text="Send Application"
                    css="bg-secondary w-full mt-6 !py-2.5 font-medium"
                    hoverColor="bg-primary/60"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="p-0 px-8 bg-transparent border-none shadow-none flex justify-center">
                <div className="relative flex sm:flex-row flex-col w-full rounded-lg overflow-hidden bg-white max-w-[720px]">
                  <X
                    onClick={() => setOpen(false)}
                    className="cursor-pointer stroke-secondary absolute top-3 right-7"
                    size={20}
                  />
                  {/* Left Side */}
                  <div className="flex flex-col gap-2.5 flex-1 bg-[#f9f9f9] px-[30px] py-[42px]">
                    <div className="flex justify-between text-sm">
                      <h4>Monthly Payment</h4>
                      <h4 className="font-medium">
                        {MonthlyPayment.toLocaleString()} AED
                      </h4>
                    </div>
                    <hr className="h-1" />
                    <div className="flex justify-between text-sm">
                      <h4>Loan Amount</h4>
                      <h4 className="font-medium">
                        {LoanAmount.toLocaleString()} AED
                      </h4>
                    </div>
                    <hr className="h-1" />
                    <div className="flex justify-between text-sm">
                      <h4>Down Payment</h4>
                      <h4 className="font-medium">
                        {DownPayment.toLocaleString()} AED
                      </h4>
                    </div>
                    <hr className="h-1" />
                    <div className="flex justify-between text-sm">
                      <h4>Interest Rate</h4>
                      <h4 className="font-medium">{InterestRate}%</h4>
                    </div>
                    <hr className="h-1" />
                    <div className="flex justify-between text-sm">
                      <h4>Loan Period</h4>
                      <h4 className="font-medium">{LoanPeriod} years</h4>
                    </div>
                  </div>
                  {/* Right Side */}
                  <form
                    onSubmit={SubmitForm}
                    className="flex-1 flex flex-col gap-2.5 px-[30px] py-[42px]"
                  >
                    <div className="w-full border focus-within:border-secondary relative h-10 rounded-sm bg-white transition-all duration-300">
                      <input
                        required
                        name="name"
                        type="text"
                        value={userInfo.name}
                        onChange={(e) =>
                          setuserInfo({ ...userInfo, name: e.target.value })
                        }
                        className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
                      />
                      <label
                        className="
                      peer-focus:text-xs peer-focus:right-2.5 peer-focus:top-2.5 peer-focus:left-auto absolute top-1.5 left-2.5 text-[#bbb]
                      peer-valid:text-xs peer-valid:right-2.5 peer-valid:top-2.5 peer-valid:left-auto
                      "
                      >
                        Name*
                      </label>
                    </div>
                    <div className="w-full border focus-within:border-secondary relative h-10 rounded-sm bg-white transition-all duration-300">
                      <input
                        required
                        name="phone"
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) =>
                          setuserInfo({ ...userInfo, phone: e.target.value })
                        }
                        className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
                      />
                      <label
                        className="
                      peer-focus:text-xs peer-focus:right-2.5 peer-focus:top-2.5 peer-focus:left-auto absolute top-1.5 left-2.5 text-[#bbb]
                      peer-valid:text-xs peer-valid:right-2.5 peer-valid:top-2.5 peer-valid:left-auto
                      "
                      >
                        Phone*
                      </label>
                    </div>
                    <div className="w-full border focus-within:border-secondary relative h-10 rounded-sm bg-white transition-all duration-300">
                      <input
                        required
                        name="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) =>
                          setuserInfo({ ...userInfo, email: e.target.value })
                        }
                        className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
                      />
                      <label
                        className="
                      peer-focus:text-xs peer-focus:right-2.5 peer-focus:top-2.5 peer-focus:left-auto absolute top-1.5 left-2.5 text-[#bbb]
                      peer-valid:text-xs peer-valid:right-2.5 peer-valid:top-2.5 peer-valid:left-auto
                      "
                      >
                        E-Mail*
                      </label>
                    </div>
                    <AnimatedButton
                      type="submit"
                      text="SEND APPLICATION"
                      css="bg-secondary font-medium w-full py-2.5 mt-2.5"
                      hoverColor="bg-primary/60"
                    />
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Calculator_SliderI {
  title: string;
  CurrencyType: string;
  min: number;
  max: number;
  steps: number;
  SliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  withPercentage?: boolean;
}

const Calculator_Slider = ({
  title,
  CurrencyType,
  min,
  max,
  steps,
  SliderValue,
  setSliderValue,
  withPercentage = false,
}: Calculator_SliderI) => {
  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.currentTarget.value.replace(/[^0-9-.]/g, "")));
  };

  return (
    <div>
      <h4 className="text-[#8f8f8f] md:text-sm text-xs leading-none mb-1">
        {title}
      </h4>
      <div className="flex flex-col w-full gap-2.5">
        <div className="flex justify-between items-center md:text-lg text-base font-medium leading-none">
          <input
            className="w-fit bg-transparent focus:outline-none"
            type="text"
            value={SliderValue.toString()
              .replace(/,/gi, "")
              .split(/(?=(?:\d{3})+$)/)
              .join(",")}
            onChange={setInputValue}
            onBlur={() => {
              SliderValue < min && setSliderValue(min);
              SliderValue > max && setSliderValue(max);
            }}
          />
          {withPercentage && (
            <span>{Math.round((SliderValue / max) * 90)}%</span>
          )}
        </div>
        <Slider
          value={[SliderValue]}
          defaultValue={[SliderValue]}
          onValueChange={(e) => setSliderValue(e[0])}
          min={min}
          max={max}
          step={steps}
        />
        <div className="text-[#8f8f8f] text-xs leading-none flex justify-between items-center">
          <p>
            {min.toLocaleString()} {CurrencyType}
          </p>
          <p>
            {max.toLocaleString()} {CurrencyType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mortgage_Calculator;
