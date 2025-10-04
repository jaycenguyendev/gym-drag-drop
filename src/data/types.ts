export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface Exercise {
  id: number;
  name: string;
  details: string;
  sets: number;
}

export interface Workout {
  id: number;
  name: string;
  exercises: Exercise[];
}

export interface DaySchedule {
  day: Weekday;
  workouts: Workout[];
}

export type WeekSchedule = DaySchedule[];
