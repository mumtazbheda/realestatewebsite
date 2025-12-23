"use client";
import { StaticImageData } from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

export const ImageViewerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <PhotoProvider>
      {children}
    </PhotoProvider>
  );
};

export const ImageView = ({
  children,
  key,
  src,
}: {
  key: string | number;
  children: React.ReactNode;
  src: string;
}) => {
  return (
    <PhotoView key={key} src={src}>
      <div>{children}</div>
    </PhotoView>
  );
};
