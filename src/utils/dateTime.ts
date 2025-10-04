import type { Weekday } from "@data/types";

/** Get all dates for current week (Monday to Sunday) */
export const getCurrentWeek = (): Date[] => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const dayOfMonth = now.getDate();
  const startOfWeek = new Date(now);

  /** Adjust to Monday as first day of week */
  startOfWeek.setDate(dayOfMonth - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

  const week: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    week.push(day);
  }

  return week;
};

export interface DateInfo {
  monthDay: string;
  weekDay: Weekday;
  isToday: boolean;
}

/** Extract date information from Date object */
export const getDateInfo = (date: Date): DateInfo => {
  return {
    monthDay: date.getDate().toString().padStart(2, "0"),
    weekDay: date
      .toLocaleDateString(undefined, { weekday: "short" })
      .toLowerCase() as Weekday,
    isToday: date.toDateString() === new Date().toDateString(),
  };
};
