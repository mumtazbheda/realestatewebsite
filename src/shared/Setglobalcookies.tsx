"use client";
import { SetCookiesGlobally } from "@/lib/actions/Cookies";
import { useEffect } from "react";

const Setglobalcookies = () => {

  useEffect(() => {
    // Setting Cookies Globally
    SetCookiesGlobally();
  }, []);
  return null;
};

export default Setglobalcookies;
