import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date): string => {
  return moment(date).format("DD.MM.YYYY");
};

export const createOrganisationInviteCode = () => {
  return Math.random().toString(36).substring(2, 15);
};
