import CustomPointer from "@/components/customPointer";
import Header from "./header";
import { Poppins, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import EnquiryModal from "@/shared/goldenvisasuae/EnquiryModal";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const currentYear = new Date().getFullYear();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn(["CustomScrollBar", poppins.className])}>
      {/* <div className={cn(["cursor-none CustomScrollBar", poppins.className])}> */}
      <Suspense fallback={null}>
        <EnquiryModal />
      </Suspense>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      {/* <CustomPointer /> */}
      {children}
      <footer className="bg-[#333]">
        <div className="container flex justify-center items-center p-[1rem]">
          <div className="text-sm text-[#b6b6b6]">
            © Copyright {currentYear} All Rights Reserved Kingdom Capital Real
            Estate.
          </div>
        </div>
      </footer>
    </div>
  );
}
