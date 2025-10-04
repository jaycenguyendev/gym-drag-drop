import type { WeekSchedule } from "./types";

const pushPullLegsSchedule: WeekSchedule = [
  {
    day: "mon",
    workouts: [
      {
        id: 1,
        name: "Push Day",
        exercises: [
          {
            id: 1,
            name: "Bench Press",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          {
            id: 2,
            name: "Overhead Press",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          {
            id: 3,
            name: "Tricep Dips",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          { id: 4, name: "Push Ups", details: "3 sets to failure", sets: 3 },
        ],
      },
    ],
  },
  {
    day: "tue",
    workouts: [
      {
        id: 2,
        name: "Pull Day",
        exercises: [
          { id: 5, name: "Pull Ups", details: "3 sets of 8-12 reps", sets: 3 },
          { id: 6, name: "Deadlifts", details: "3 sets of 8-12 reps", sets: 3 },
          {
            id: 7,
            name: "Bicep Curls",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          { id: 8, name: "Rows", details: "3 sets of 8-12 reps", sets: 3 },
        ],
      },
    ],
  },
  {
    day: "wed",
    workouts: [
      {
        id: 3,
        name: "Leg Day",
        exercises: [
          { id: 9, name: "Squats", details: "3 sets of 8-12 reps", sets: 3 },
          { id: 10, name: "Lunges", details: "3 sets of 8-12 reps", sets: 3 },
          {
            id: 11,
            name: "Leg Press",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          {
            id: 12,
            name: "Calf Raises",
            details: "3 sets of 15-20 reps",
            sets: 3,
          },
        ],
      },
    ],
  },
  {
    day: "thu",
    workouts: [],
  },
  {
    day: "fri",
    workouts: [
      {
        id: 4,
        name: "Push Day",
        exercises: [
          {
            id: 1,
            name: "Bench Press",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          {
            id: 2,
            name: "Overhead Press",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          {
            id: 3,
            name: "Tricep Dips",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          { id: 4, name: "Push Ups", details: "3 sets to failure", sets: 3 },
        ],
      },
    ],
  },
  {
    day: "sat",
    workouts: [
      {
        id: 5,
        name: "Pull Day",
        exercises: [
          { id: 5, name: "Pull Ups", details: "3 sets of 8-12 reps", sets: 3 },
          { id: 6, name: "Deadlifts", details: "3 sets of 8-12 reps", sets: 3 },
          {
            id: 7,
            name: "Bicep Curls",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          { id: 8, name: "Rows", details: "3 sets of 8-12 reps", sets: 3 },
        ],
      },
    ],
  },
  {
    day: "sun",
    workouts: [
      {
        id: 6,
        name: "Leg Day",
        exercises: [
          { id: 9, name: "Squats", details: "3 sets of 8-12 reps", sets: 3 },
          { id: 10, name: "Lunges", details: "3 sets of 8-12 reps", sets: 3 },
          {
            id: 11,
            name: "Leg Press",
            details: "3 sets of 8-12 reps",
            sets: 3,
          },
          {
            id: 12,
            name: "Calf Raises",
            details: "3 sets of 15-20 reps",
            sets: 3,
          },
        ],
      },
    ],
  },
];

export const getWeekSchedule = (): WeekSchedule => {
  return pushPullLegsSchedule;
};
