"use server";
import { cookies } from "next/headers";

export const GetCookies = async ({ name }: { name: string }) => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
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
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
  if (!cookie) {
    cookieStore.set(name, value.toUpperCase());
  } else if (cookie && !(cookie.value === value.toUpperCase())) {
    cookieStore.set(name, value.toUpperCase(), {
      maxAge: maxAge ? maxAge : 86400000,
    });
  }
};

export const DeleteCookies = async ({ name }: { name: string }) => {
  const cookieStore = await cookies();
  if (cookieStore.has(name)) {
    cookieStore.delete(name);
    return true;
  } else {
    return false;
  }
};

export const SetCookiesGlobally = async () => {
  const cookieStore = await cookies();
  if (!cookieStore.has("price")) {
    cookieStore.set("price", "AED");
  }
  !cookieStore.has("area") && cookieStore.set("area", "SQ.FT");
};
