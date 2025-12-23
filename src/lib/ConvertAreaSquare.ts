export const ConvertAreaSquare = ({
  value,
  AreaType,
}: {
  value: number;
  AreaType: string;
}) => {
  if (AreaType === "SQ.M") {
    return Math.round(value * 0.0929).toLocaleString();
  } else {
    return value.toLocaleString();
  }
};

export const Convert_sqm_to_sqft = ({ value }: { value: number }) => {
  return Math.round(value * 10.76391042);
};
