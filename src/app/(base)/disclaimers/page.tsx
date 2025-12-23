import Navigation from "@/shared/Navigation";
import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimers",
  description: "Disclaimers - Kingdom Capital",
  openGraph: {
    title: "Disclaimers",
    description: "Disclaimers - Kingdom Capital",
  },
};

const Disclaimers = async () => {
  return (
    <main className="max-width sm:py-6 py-2.5 sm:px-4 px-2">
      <div className="flex flex-col-reverse gap-5">
        {/* Title */}
        <h1 className="lg:text-4xl sm:text-3xl text-[26px] leading-none font-bold">
          Disclaimer for Kingdom Capital Real Estate
        </h1>

        {/* Navigation */}
        <section>
          <Navigation
            title={"Disclaimers"}
            wrapperClassName="!block max-sm:!hidden"
          />
        </section>
      </div>

      {/* Content */}
      <p className="sm:text-base text-sm mt-4">
        If you require any more information or have any questions about our
        site&apos;s disclaimer, please feel free to contact us by email at
        anosh@thekingdom.ae. Our Disclaimer was generated with the help of the{" "}
        <span>
          <a href="https://www.disclaimergenerator.net/">
            Free Disclaimer Generator
          </a>
        </span>
        .
      </p>

      <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold tracking-tight mt-5">
        Disclaimers for Kingdom Capital Real Estate
      </h2>

      <p className="sm:text-base text-sm mt-4">
        All the information on this website -
        <span>
          <Link href={"https://www.thekingdom.realestate/"}>
            Kingdom Capital Real Estate
          </Link>
        </span>{" "}
        - is published in good faith and for general information purpose only.
        Kingdom Capital Real Estate does not make any warranties about the
        completeness, reliability and accuracy of this information. Any action
        you take upon the information you find on this website (Kingdom Capital
        Real Estate), is strictly at your own risk. Kingdom Capital Real Estate
        will not be liable for any losses and/or damages in connection with the
        use of our website.
      </p>

      <p className="sm:text-base text-sm mt-4">
        From our website, you can visit other websites by following hyperlinks
        to such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone &apos;bad&apos;.
      </p>

      <p className="sm:text-base text-sm mt-4">
        Please be also aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as
        their &quot;Terms of Service&quot; before engaging in any business or
        uploading any information.
      </p>

      <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold tracking-tight mt-5">
        Consent
      </h2>

      <p className="sm:text-base text-sm mt-2">
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
      </p>

      <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold tracking-tight mt-5">
        Update
      </h2>

      <p className="sm:text-base text-sm mt-2">
        Should we update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </p>
    </main>
  );
};

export default Disclaimers;
