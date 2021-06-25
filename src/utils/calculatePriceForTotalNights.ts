export const calculatePriceForTotalNights = (
  pricePerNight: number,
  daysCount: number
) => {
  const calculated = pricePerNight * daysCount;
  return calculated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
