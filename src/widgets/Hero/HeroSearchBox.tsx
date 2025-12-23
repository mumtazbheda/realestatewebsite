import { SearchParamsI } from "@/app/(base)/[buy&rent]/page";
import { DropBoxSearch } from "@/components/ui/dropboxSearch";
import { GetCookies } from "@/lib/actions/Cookies";
import { SubmitSearchForm } from "@/lib/actions/FormAction";
import { ProjectTypes } from "@/lib/constants";
import { DecodeSlug } from "@/lib/helper/CreateSlug";
import { Dropbox } from "@/shared/Dropbox";
import { SearchBar } from "@/shared/SearchBar";

const HeroSearchBox = ({
  title = true,
  Params,
  buyORrent,
  priceType,
  areaType
}: {
  title?: boolean;
  Params?: SearchParamsI;
  buyORrent?: string;
  priceType? : string,
  areaType? : string
}) => {
  const Input = Params && Params.Input && Params.Input.split(",,");

  return (
    <div className="lg:max-w-[1180px] z-30 max-w-screen-md w-full mx-auto px-4">
      <form
        action={SubmitSearchForm}
        className="w-full rounded flex lg:flex-row flex-col sm:items-center"
        style={{
          background: "rgb(255 255 255 / 25%)",
          backdropFilter: "blur(8px)",
        }}
      >
        {title && (
          <div className="lg:w-1/3 flex items-center justify-center text-center">
            <h2 className="lg:max-w-[250px] lg:text-5xl md:text-4xl text-3xl text-center font-bold text-white tracking-tighter lg:py-3 pt-3">
              Find Property In Dubai
            </h2>
          </div>
        )}
        <div className="space-y-2 w-full py-4 px-4">
          <div className="flex lg:flex-row flex-col gap-2">
            <div className="flex lg:w-full gap-2">
              <div className="lg:w-[38%] w-1/2">
                <Dropbox
                  initialValue="buy"
                  name="type"
                  Activevalue={buyORrent && buyORrent && buyORrent}
                  PlaceHolder={SearchFormData.type.PlaceHolder}
                  Options={SearchFormData.type.options}
                />
              </div>
              <div className="lg:w-full w-1/2">
                <Dropbox
                  name="status"
                  Activevalue={Params && Params.status && Params.status}
                  PlaceHolder={SearchFormData.status.PlaceHolder}
                  Options={SearchFormData.status.options}
                />
              </div>
            </div>
            <div className="lg:w-8/12">
              <Dropbox
                name="propertyType"
                Activevalue={
                  Params && Params.propertyType && Params.propertyType
                }
                PlaceHolder={SearchFormData.propertyType.PlaceHolder}
                Options={[
                  { label: "Select Property Type", value: "" },
                  ...ProjectTypes.map((items) => ({
                    label: items.title,
                    value: items.value,
                  })),
                ]}
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-2">
            <div className="flex lg:w-[35%] gap-2">
              <div className="w-1/2">
                <DropBoxSearch
                  name="min-Area"
                  options={SearchFormData.min_Area.options.map((items) => ({
                    label: areaType !== "SQ.FT" ? items.label.replace("sqft" , "sqm") : items.label,
                    value: items.value,
                  }))}
                  placeholder={"Min. Area"}
                  InitialValue={
                    Params && Params["min-area"] && Params["min-area"]
                  }
                />
              </div>
              <div className="w-1/2">
                <DropBoxSearch
                  name="max-Area"
                  InitialValue={
                    Params && Params["max-area"] && Params["max-area"]
                  }
                  placeholder={SearchFormData.max_Area.PlaceHolder}
                  options={SearchFormData.max_Area.options.map((items) => ({
                    label: areaType !== "SQ.FT" ? items.label.replace("sqft" , "sqm") : items.label,
                    value: items.value,
                  }))}
                />
              </div>
            </div>
            <div className="flex lg:w-[35%] gap-2">
              <div className="w-1/2">
                <DropBoxSearch
                  name="min-Bedrooms"
                  InitialValue={
                    Params && Params["min-bedrooms"] && Params["min-bedrooms"]
                  }
                  placeholder={SearchFormData.min_bedrooms.PlaceHolder}
                  options={SearchFormData.min_bedrooms.options}
                />
              </div>
              <div className="w-1/2">
                <DropBoxSearch
                  name="max-Bedrooms"
                  InitialValue={
                    Params && Params["max-bedrooms"] && Params["max-bedrooms"]
                  }
                  placeholder={SearchFormData.max_bedrooms.PlaceHolder}
                  options={SearchFormData.max_bedrooms.options}
                />
              </div>
            </div>
            <div className="flex lg:w-[35%] gap-2">
              <div className="w-1/2">
                <DropBoxSearch
                  name="min-price"
                  InitialValue={
                    Params && Params["min-price"] && Params["min-price"]
                  }
                  placeholder={SearchFormData.min_price.PlaceHolder}
                  options={SearchFormData.min_price.options.map((items) => ({
                    label : items.label.replace("AED" , priceType ?? "AED"),
                    value : items.value
                  }))}
                />
              </div>
              <div className="w-1/2">
                <DropBoxSearch
                  name="max-price"
                  InitialValue={
                    Params && Params["max-price"] && Params["max-price"]
                  }
                  placeholder={SearchFormData.max_price.PlaceHolder}
                  options={SearchFormData.max_price.options.map((items) => ({
                    label : items.label.replace("AED" , priceType ?? "AED"),
                    value : items.value
                  }))}
                />
              </div>
            </div>
          </div>
          <div className="flex-grow w-full flex gap-2">
            <SearchBar
              MultiSelect={true}
              name="Input"
              Activevalue={Input}
              OptionType={["area", "project", "city"]}
              PlaceHolder={"City, Area, Properties..."}
            />
            <button
              type="submit"
              className="rounded max-md:hidden w-full max-w-[16%] group relative overflow-hidden bg-secondary text-white py-2"
            >
              <span className="relative text-white z-20 font-semibold text-sm">
                SEARCH
              </span>
              <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-primary/60"></span>
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="md:hidden w-full mt-2 group relative overflow-hidden bg-secondary text-white py-2"
        >
          <span className="relative text-white z-20 font-semibold lg:text-sm max-sm:text-sm">
            SEARCH
          </span>
          <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-primary/60"></span>
        </button>
      </form>
    </div>
  );
};

const SearchFormData = {
  type: {
    PlaceHolder: "Buy",
    options: [
      { label: "Buy", value: "buy" },
      { label: "Rent", value: "rent" },
    ],
  },
  status: {
    PlaceHolder: "Completion Status",
    options: [
      { label: "Completion Status", value: "" },
      { label: "Ready", value: "ready" },
      { label: "Off-plan", value: "Off-Plan" },
    ],
  },
  propertyType: {
    PlaceHolder: "Select Property Type",
    options: [
      // { label: "Select Property Type", value: "" },
      // { label: "Apartment", value: "apartment" },
      // { label: "Bulk Units", value: "bulk-units" },
      // { label: "Commercial Full Building", value: "commercial-full-building" },
      // { label: "Commercial Full Floor", value: "commercial-full-floor" },
      // { label: "Duplex", value: "duplex" },
      // { label: "Factory", value: "factory" },
      // { label: "Full Floor", value: "full-floor" },
    ],
  },
  min_Area: {
    PlaceHolder: "Min. Area",
    options: [
      { label: "500 sqft", value: "500" },
      { label: "600 sqft", value: "600" },
      { label: "700 sqft", value: "700" },
      { label: "800 sqft", value: "800" },
      { label: "900 sqft", value: "900" },
      { label: "1,000 sqft", value: "1000" },
      { label: "1,100 sqft", value: "1100" },
      { label: "1,200 sqft", value: "1200" },
      { label: "1,300 sqft", value: "1300" },
      { label: "1,400 sqft", value: "1400" },
      { label: "1,500 sqft", value: "1500" },
      { label: "1,600 sqft", value: "1600" },
      { label: "1,700 sqft", value: "1700" },
      { label: "1,800 sqft", value: "1800" },
      { label: "1,900 sqft", value: "1900" },
      { label: "2,000 sqft", value: "2000" },
      { label: "2,200 sqft", value: "2200" },
      { label: "2,400 sqft", value: "2400" },
      { label: "2,800 sqft", value: "2800" },
      { label: "3,000 sqft", value: "3000" },
      { label: "3,200 sqft", value: "3200" },
      { label: "3,400 sqft", value: "3400" },
      { label: "3,600 sqft", value: "3600" },
      { label: "3,800 sqft", value: "3800" },
      { label: "4,200 sqft", value: "4200" },
      { label: "4,600 sqft", value: "4600" },
      { label: "5,000 sqft", value: "5000" },
      { label: "5,400 sqft", value: "5400" },
      { label: "5,800 sqft", value: "5800" },
      { label: "6,200 sqft", value: "6200" },
      { label: "6,600 sqft", value: "6600" },
      { label: "7,000 sqft", value: "7000" },
      { label: "7,400 sqft", value: "7400" },
      { label: "7,800 sqft", value: "7800" },
      { label: "8,200 sqft", value: "8200" },
      { label: "9,000 sqft", value: "9000" },
      { label: "9,000+ sqft", value: "9000+" },
    ],
  },
  max_Area: {
    PlaceHolder: "Max. Area",
    options: [
      { label: "500 sqft", value: "500" },
      { label: "600 sqft", value: "600" },
      { label: "700 sqft", value: "700" },
      { label: "800 sqft", value: "800" },
      { label: "900 sqft", value: "900" },
      { label: "1,000 sqft", value: "1000" },
      { label: "1,100 sqft", value: "1100" },
      { label: "1,200 sqft", value: "1200" },
      { label: "1,300 sqft", value: "1300" },
      { label: "1,400 sqft", value: "1400" },
      { label: "1,500 sqft", value: "1500" },
      { label: "1,600 sqft", value: "1600" },
      { label: "1,700 sqft", value: "1700" },
      { label: "1,800 sqft", value: "1800" },
      { label: "1,900 sqft", value: "1900" },
      { label: "2,000 sqft", value: "2000" },
      { label: "2,200 sqft", value: "2200" },
      { label: "2,400 sqft", value: "2400" },
      { label: "2,800 sqft", value: "2800" },
      { label: "3,000 sqft", value: "3000" },
      { label: "3,200 sqft", value: "3200" },
      { label: "3,400 sqft", value: "3400" },
      { label: "3,600 sqft", value: "3600" },
      { label: "3,800 sqft", value: "3800" },
      { label: "4,200 sqft", value: "4200" },
      { label: "4,600 sqft", value: "4600" },
      { label: "5,000 sqft", value: "5000" },
      { label: "5,400 sqft", value: "5400" },
      { label: "5,800 sqft", value: "5800" },
      { label: "6,200 sqft", value: "6200" },
      { label: "6,600 sqft", value: "6600" },
      { label: "7,000 sqft", value: "7000" },
      { label: "7,400 sqft", value: "7400" },
      { label: "7,800 sqft", value: "7800" },
      { label: "8,200 sqft", value: "8200" },
      { label: "9,000 sqft", value: "9000" },
      { label: "9,000+ sqft", value: "9000+" },
    ],
  },
  min_bedrooms: {
    PlaceHolder: "Min. Bedrooms",
    options: [
      { label: "Studio", value: "studio" },
      { label: "1 Bedroom", value: "1" },
      { label: "2 Bedrooms", value: "2" },
      { label: "3 Bedrooms", value: "3" },
      { label: "4 Bedrooms", value: "4" },
      { label: "5 Bedrooms", value: "5" },
      { label: "6 Bedrooms", value: "6" },
      { label: "7 Bedrooms", value: "7" },
      { label: "7+ Bedrooms", value: "7+" },
    ],
  },
  max_bedrooms: {
    PlaceHolder: "Max. Bedrooms",
    options: [
      { label: "Studio", value: "studio" },
      { label: "1 Bedroom", value: "1" },
      { label: "2 Bedrooms", value: "2" },
      { label: "3 Bedrooms", value: "3" },
      { label: "4 Bedrooms", value: "4" },
      { label: "5 Bedrooms", value: "5" },
      { label: "6 Bedrooms", value: "6" },
      { label: "7 Bedrooms", value: "7" },
      { label: "7+ Bedrooms", value: "7+" },
    ],
  },
  min_price: {
    PlaceHolder: "Min. Price",
    options: [
      { label: "300,000 AED", value: "300000" },
      { label: "400,000 AED", value: "400000" },
      { label: "500,000 AED", value: "500000" },
      { label: "600,000 AED", value: "600000" },
      { label: "700,000 AED", value: "700000" },
      { label: "800,000 AED", value: "800000" },
      { label: "900,000 AED", value: "900000" },
      { label: "1,000,000 AED", value: "1000000" },
      { label: "1,100,000 AED", value: "1100000" },
      { label: "1,200,000 AED", value: "1200000" },
      { label: "1,300,000 AED", value: "1300000" },
      { label: "1,400,000 AED", value: "1400000" },
      { label: "1,500,000 AED", value: "1500000" },
      { label: "1,600,000 AED", value: "1600000" },
      { label: "1,700,000 AED", value: "1700000" },
      { label: "1,800,000 AED", value: "1800000" },
      { label: "1,900,000 AED", value: "1900000" },
      { label: "2,000,000 AED", value: "2000000" },
      { label: "2,100,000 AED", value: "2100000" },
      { label: "2,200,000 AED", value: "2200000" },
      { label: "2,300,000 AED", value: "2300000" },
      { label: "2,400,000 AED", value: "2400000" },
      { label: "2,500,000 AED", value: "2500000" },
      { label: "2,600,000 AED", value: "2600000" },
      { label: "2,700,000 AED", value: "2700000" },
      { label: "2,800,000 AED", value: "2800000" },
      { label: "2,900,000 AED", value: "2900000" },
      { label: "3,000,000 AED", value: "3000000" },
      { label: "3,250,000 AED", value: "3250000" },
      { label: "3,500,000 AED", value: "3500000" },
      { label: "3,750,000 AED", value: "3750000" },
      { label: "4,000,000 AED", value: "4000000" },
      { label: "4,250,000 AED", value: "4250000" },
      { label: "4,500,000 AED", value: "4500000" },
      { label: "4,750,000 AED", value: "4750000" },
      { label: "5,000,000 AED", value: "5000000" },
      { label: "6,000,000 AED", value: "6000000" },
      { label: "7,000,000 AED", value: "7000000" },
      { label: "8,000,000 AED", value: "8000000" },
      { label: "9,000,000 AED", value: "9000000" },
      { label: "10,000,000 AED", value: "10000000" },
      { label: "25,000,000 AED", value: "25000000" },
      { label: "50,000,000 AED", value: "50000000" },
      { label: "50,000,000+ AED", value: "50000000+" },
    ],
  },
  max_price: {
    PlaceHolder: "Max. Price",
    options: [
      { label: "300,000 AED", value: "300000" },
      { label: "400,000 AED", value: "400000" },
      { label: "500,000 AED", value: "500000" },
      { label: "600,000 AED", value: "600000" },
      { label: "700,000 AED", value: "700000" },
      { label: "800,000 AED", value: "800000" },
      { label: "900,000 AED", value: "900000" },
      { label: "1,000,000 AED", value: "1000000" },
      { label: "1,100,000 AED", value: "1100000" },
      { label: "1,200,000 AED", value: "1200000" },
      { label: "1,300,000 AED", value: "1300000" },
      { label: "1,400,000 AED", value: "1400000" },
      { label: "1,500,000 AED", value: "1500000" },
      { label: "1,600,000 AED", value: "1600000" },
      { label: "1,700,000 AED", value: "1700000" },
      { label: "1,800,000 AED", value: "1800000" },
      { label: "1,900,000 AED", value: "1900000" },
      { label: "2,000,000 AED", value: "2000000" },
      { label: "2,100,000 AED", value: "2100000" },
      { label: "2,200,000 AED", value: "2200000" },
      { label: "2,300,000 AED", value: "2300000" },
      { label: "2,400,000 AED", value: "2400000" },
      { label: "2,500,000 AED", value: "2500000" },
      { label: "2,600,000 AED", value: "2600000" },
      { label: "2,700,000 AED", value: "2700000" },
      { label: "2,800,000 AED", value: "2800000" },
      { label: "2,900,000 AED", value: "2900000" },
      { label: "3,000,000 AED", value: "3000000" },
      { label: "3,250,000 AED", value: "3250000" },
      { label: "3,500,000 AED", value: "3500000" },
      { label: "3,750,000 AED", value: "3750000" },
      { label: "4,000,000 AED", value: "4000000" },
      { label: "4,250,000 AED", value: "4250000" },
      { label: "4,500,000 AED", value: "4500000" },
      { label: "4,750,000 AED", value: "4750000" },
      { label: "5,000,000 AED", value: "5000000" },
      { label: "6,000,000 AED", value: "6000000" },
      { label: "7,000,000 AED", value: "7000000" },
      { label: "8,000,000 AED", value: "8000000" },
      { label: "9,000,000 AED", value: "9000000" },
      { label: "10,000,000 AED", value: "10000000" },
      { label: "25,000,000 AED", value: "25000000" },
      { label: "50,000,000 AED", value: "50000000" },
      { label: "50,000,000+ AED", value: "50000000+" },
    ],
  },
};

export default HeroSearchBox;
