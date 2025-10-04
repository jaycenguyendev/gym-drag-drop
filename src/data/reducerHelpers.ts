import type { Weekday, Workout, WeekSchedule } from "./types";

export const findWorkoutById = (
  schedule: WeekSchedule,
  workoutId: number
): Workout | undefined => {
  return schedule
    .flatMap((day) => day.workouts)
    .find((w) => w.id === workoutId);
};

export const moveWorkoutBetweenDays = (
  schedule: WeekSchedule,
  workoutId: number,
  fromDay: Weekday,
  toDay: Weekday
): WeekSchedule => {
  const sourceDayData = schedule.find((day) => day.day === fromDay);
  const targetDayData = schedule.find((day) => day.day === toDay);

  if (!sourceDayData || !targetDayData) {
    return schedule;
  }

  const workoutToMove = sourceDayData.workouts.find((w) => w.id === workoutId);
  if (!workoutToMove) {
    return schedule;
  }

  const updatedSourceWorkouts = sourceDayData.workouts.filter(
    (w) => w.id !== workoutId
  );
  const updatedTargetWorkouts = [...targetDayData.workouts, workoutToMove];

  return schedule.map((day) => {
    if (day.day === fromDay) {
      return { ...day, workouts: updatedSourceWorkouts };
    }
    if (day.day === toDay) {
      return { ...day, workouts: updatedTargetWorkouts };
    }
    return day;
  });
};

export const moveExerciseBetweenWorkouts = (
  schedule: WeekSchedule,
  exerciseId: number,
  fromWorkoutId: number,
  toWorkoutId: number
): WeekSchedule => {
  const sourceWorkout = findWorkoutById(schedule, fromWorkoutId);
  const targetWorkout = findWorkoutById(schedule, toWorkoutId);

  if (!sourceWorkout || !targetWorkout) {
    return schedule;
  }

  const exerciseToMove = sourceWorkout.exercises.find(
    (e) => e.id === exerciseId
  );
  if (!exerciseToMove) {
    return schedule;
  }

  const updatedSourceExercises = sourceWorkout.exercises.filter(
    (e) => e.id !== exerciseId
  );
  const updatedTargetExercises = [...targetWorkout.exercises, exerciseToMove];

  return schedule.map((day) => ({
    ...day,
    workouts: day.workouts.map((workout) => {
      if (workout.id === fromWorkoutId) {
        return { ...workout, exercises: updatedSourceExercises };
      }
      if (workout.id === toWorkoutId) {
        return { ...workout, exercises: updatedTargetExercises };
      }
      return workout;
    }),
  }));
};

export const swapExercisesInWorkout = (
  schedule: WeekSchedule,
  workoutId: number,
  exerciseId1: number,
  exerciseId2: number
): WeekSchedule => {
  const workout = findWorkoutById(schedule, workoutId);

  if (!workout) {
    return schedule;
  }

  const index1 = workout.exercises.findIndex((e) => e.id === exerciseId1);
  const index2 = workout.exercises.findIndex((e) => e.id === exerciseId2);

  if (index1 === -1 || index2 === -1) {
    return schedule;
  }

  const updatedExercises = [...workout.exercises];
  const temp = updatedExercises[index1];
  if (temp && updatedExercises[index2]) {
    updatedExercises[index1] = updatedExercises[index2];
    updatedExercises[index2] = temp;
  }

  return schedule.map((day) => ({
    ...day,
    workouts: day.workouts.map((w) => {
      if (w.id === workoutId) {
        return { ...w, exercises: updatedExercises };
      }
      return w;
    }),
  }));
};
