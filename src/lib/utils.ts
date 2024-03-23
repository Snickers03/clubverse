import { clsx, type ClassValue } from "clsx";
import moment from "moment";

import "moment/locale/de";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

moment.locale("de");

export const formatDate = (date: Date): string => {
  return moment(date).format("DD.MM.YYYY");
};

export const timeFromNow = (date: Date): string => {
  return moment(date).fromNow();
};

export const createOrganisationInviteCode = () => {
  return Math.random().toString(36).substring(2, 15);
};

export const formatDonationUrl = (donationPathName: string) => {
  const organisationPath = donationPathName.split("/").pop() ?? "";

  return organisationPath;
};
