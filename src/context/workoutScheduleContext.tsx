import { createContext, useReducer } from "react";
import type { Weekday, WeekSchedule } from "../data/types";
import { ActionType } from "../data/actionTypes";
import {
  moveWorkoutBetweenDays,
  moveExerciseBetweenWorkouts,
  swapExercisesInWorkout,
} from "../data/reducerHelpers";

interface WorkoutScheduleState {
  weekSchedule: WeekSchedule;
}

export type WorkoutScheduleAction =
  | { type: ActionType.LOAD_DATA; payload: WeekSchedule }
  | {
      type: ActionType.MOVE_WORKOUT;
      payload: { fromDay: Weekday; toDay: Weekday; workoutId: number };
    }
  | {
      type: ActionType.MOVE_EXERCISE;
      payload: {
        fromWorkoutId: number;
        toWorkoutId: number;
        exerciseId: number;
      };
    }
  | {
      type: ActionType.SWAP_EXERCISES;
      payload: {
        workoutId: number;
        exerciseId1: number;
        exerciseId2: number;
      };
    };

const initialState: WorkoutScheduleState = {
  weekSchedule: [],
};

const workoutScheduleReducer = (
  state: WorkoutScheduleState,
  action: WorkoutScheduleAction
): WorkoutScheduleState => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return { ...state, weekSchedule: action.payload };

    case ActionType.MOVE_WORKOUT: {
      const { fromDay, toDay, workoutId } = action.payload;

      if (fromDay === toDay) {
        return state;
      }

      const updatedSchedule = moveWorkoutBetweenDays(
        state.weekSchedule,
        workoutId,
        fromDay,
        toDay
      );

      return { ...state, weekSchedule: updatedSchedule };
    }

    case ActionType.MOVE_EXERCISE: {
      const { fromWorkoutId, toWorkoutId, exerciseId } = action.payload;

      if (fromWorkoutId === toWorkoutId) {
        return state;
      }

      const updatedSchedule = moveExerciseBetweenWorkouts(
        state.weekSchedule,
        exerciseId,
        fromWorkoutId,
        toWorkoutId
      );

      return { ...state, weekSchedule: updatedSchedule };
    }

    case ActionType.SWAP_EXERCISES: {
      const { workoutId, exerciseId1, exerciseId2 } = action.payload;

      if (exerciseId1 === exerciseId2) {
        return state;
      }

      const updatedSchedule = swapExercisesInWorkout(
        state.weekSchedule,
        workoutId,
        exerciseId1,
        exerciseId2
      );

      return { ...state, weekSchedule: updatedSchedule };
    }

    default:
      return state;
  }
};

export const WorkoutScheduleContext = createContext<{
  state: WorkoutScheduleState;
  dispatch: React.Dispatch<WorkoutScheduleAction>;
}>({ state: initialState, dispatch: () => null });

export const WorkoutScheduleProvider: React.FC<ParentProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(workoutScheduleReducer, initialState);

  return (
    <WorkoutScheduleContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutScheduleContext.Provider>
  );
};
