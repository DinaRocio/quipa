export const WHATSAPP_NUMBER = "51976041753";
export const WHATSAPP_NUMBER_SECONDARY = "51956295695";

export const waLink = (message: string, number: string = WHATSAPP_NUMBER): string =>
  `https://wa.me/+${number}?text=${encodeURIComponent(message)}`;
