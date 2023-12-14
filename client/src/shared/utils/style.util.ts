import { twMerge } from 'tw-merge';
import clsx, { ClassValue } from 'clsx';

export const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args));
};
