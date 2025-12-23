"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import six_senses_cover from "@/assets/images/six-senses-cover.jpeg";
import { SubmitCustomForm } from "@/lib/actions/FormAction";
import { SubmitButton } from "@/shared/SubmitButton";
import { CheckIcon } from "lucide-react";
import { redirect } from "next/navigation";

const SixSensesPage = ({
  searchParams,
}: {
  searchParams: { sent: string };
}) => {
  
  const formAction = SubmitCustomForm.bind(null, {
    emailTo: "leads@thekingdom.ae",
    subject: "Six Senses Dubai Marina",
  });

  // useEffect(() => {
  //   (function () {
  //     try {
  //       var existingIframe = (document as any)
  //         ?.getElementById("zf_div_oyt9mT2c1E-qgzCCaapHxGwpQlYbkFf8Yj8g0OHfPHo")
  //         .getElementsByTagName("iframe")[0];
  //       if (!existingIframe) {
  //         var f = document.createElement("iframe");
  //         f.src =
  //           "https://forms.zohopublic.eu/kingdomcapital/form/GoldenVisaUaeIndia/formperma/oyt9mT2c1E-qgzCCaapHxGwpQlYbkFf8Yj8g0OHfPHo?zf_rszfm=1";
  //         f.style.border = "none";
  //         f.style.height = "492px";
  //         f.style.width = "90%";
  //         f.style.transition = "all 0.5s ease";
  //         f.setAttribute("aria-label", "Golden\x20Visa\x20Uae\x20India");

  //         var d = document.getElementById(
  //           "zf_div_oyt9mT2c1E-qgzCCaapHxGwpQlYbkFf8Yj8g0OHfPHo"
  //         );
  //         d?.appendChild(f);

  //         window.addEventListener(
  //           "message",
  //           function () {
  //             var evntData = (event as any)?.data;
  //             if (evntData && evntData.constructor == String) {
  //               var zf_ifrm_data = evntData.split("|");
  //               if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
  //                 var zf_perma = zf_ifrm_data[0];
  //                 var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
  //                 var iframe = (document as any)
  //                   ?.getElementById(
  //                     "zf_div_oyt9mT2c1E-qgzCCaapHxGwpQlYbkFf8Yj8g0OHfPHo"
  //                   )
  //                   .getElementsByTagName("iframe")[0];
  //                 if (
  //                   iframe.src.indexOf("formperma") > 0 &&
  //                   iframe.src.indexOf(zf_perma) > 0
  //                 ) {
  //                   var prevIframeHeight = iframe.style.height;
  //                   var zf_tout = false;
  //                   if (zf_ifrm_data.length == 3) {
  //                     iframe.scrollIntoView();
  //                     zf_tout = true;
  //                   }
  //                   if (prevIframeHeight != zf_ifrm_ht_nw) {
  //                     if (zf_tout) {
  //                       setTimeout(function () {
  //                         iframe.style.height = zf_ifrm_ht_nw;
  //                       }, 500);
  //                     } else {
  //                       iframe.style.height = zf_ifrm_ht_nw;
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           },
  //           false
  //         );
  //       }
  //     } catch (e) {}
  //   })();
  // }, []);

  return (
    <main className="bg-[#f5f5f5] min-h-screen sm:py-[50px] py-[40px] md:px-10 flex items-center justify-center">
      <div className="container max-w-screen-xl max-xs:px-0">
        <h1 className="max-xs:px-4 text-center md:text-[52px] text-4xl font-bold leading-[1.1] text-[#262626] mb-16">
          Exclusive Villas with Direct Access to Lagoon and Pristine Beach
        </h1>
        <div className="flex md:flex-row flex-col gap-6 w-full max-w-[950px] min-h-[500px] mx-auto bg-white rounded-[50px] overflow-hidden">
          <div className="flex-1 flex justify-center items-center">
            {/* <div
              id="zf_div_oyt9mT2c1E-qgzCCaapHxGwpQlYbkFf8Yj8g0OHfPHo"
              className="w-full h-full mx-auto flex justify-center items-center"
            ></div> */}
            {searchParams.sent === "true" ? (
              <div className="w-full max-w-[400px] flex flex-col pt-10 pb-5 px-8 xl:-mt-8">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center">
                  <CheckIcon size={28} strokeWidth={4} />
                </div>
                <h3 className="text-2xl font-bold text-black mt-8">
                  Thank you!
                </h3>
                <p className="text-black/50 font-medium">
                  Our Agent will get back to you with photos and detailed
                  information regarding the apartements
                </p>
              </div>
            ) : (
              <div className="w-full max-w-xs pt-10 pb-5 px-5">
                <h4 className="text-[24px] leading-tight font-bold text-[#192221] max-md:text-center">
                  3 signature interior options. Best price at the start of the
                  sales
                </h4>
                <form
                  action={async (e) => {
                    const result = await formAction(e);

                    if (result?.success) {
                      redirect("/six-senses-residence?sent=true");
                    }
                  }}
                  className="flex flex-col gap-5 mt-6"
                >
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="text-sm px-4 min-h-[42px] text-[#262626] placeholder:text-black/70 rounded-[15px] outline-none border border-[#A2A2A2] focus:border-[#0FABDE] transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="text-sm px-4 min-h-[42px] text-[#262626] placeholder:text-black/70 rounded-[15px] outline-none border border-[#A2A2A2] focus:border-[#0FABDE] transition-all duration-300"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your Phone"
                    className="text-sm px-4 min-h-[42px] text-[#262626] placeholder:text-black/70 rounded-[15px] outline-none border border-[#A2A2A2] focus:border-[#0FABDE] transition-all duration-300"
                  />
                  <SubmitButton className="bg-[#0FABDE] font-medium min-h-[50px] text-[15px] flex items-center justify-center text-white rounded-[15px]">
                    Get Photos and layouts
                  </SubmitButton>
                </form>
              </div>
            )}
          </div>
          <div className="flex-1 flex md:justify-end">
            <Image
              className="md:w-fit md:max-h-[500px] object-cover"
              src={six_senses_cover}
              alt="Six Senses Cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SixSensesPage;
