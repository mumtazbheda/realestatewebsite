"use server";
import { cookies } from "next/headers";

export const GetCookies = async ({ name }: { name: string }) => {
  const cookie = cookies().get(name);
  if (cookie) {
    return cookie.value.toUpperCase();
  } else if (!cookie) {
    return undefined;
  }
};

export const SetCookie = async ({
  name,
  value,
  maxAge,
}: {
  name: string;
  value: string;
  maxAge?: number;
}) => {
  const Cookies = cookies();
  const cookie = cookies().get(name);
  if (!cookie) {
    Cookies.set(name, value.toUpperCase());
  } else if (cookie && !(cookie.value === value.toUpperCase())) {
    Cookies.set(name, value.toUpperCase(), {
      maxAge: maxAge ? maxAge : 86400000,
    });
  }
};

export const DeleteCookies = async ({ name }: { name: string }) => {
  const Cookies = cookies();
  if (Cookies.has(name)) {
    Cookies.delete(name);
    return true;
  } else {
    return false;
  }
};

export const SetCookiesGlobally = async () => {
  const Cookies = cookies();
  if (!Cookies.has("price")) {
    Cookies.set("price", "AED");
  }
  !Cookies.has("area") && Cookies.set("area", "SQ.FT");
};
