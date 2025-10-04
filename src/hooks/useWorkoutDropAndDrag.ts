import { useDrag, useDrop } from "react-dnd";
import type { Weekday } from "@data/types";
import { ActionType } from "@data/actionTypes";
import useWorkoutSchedule from "@hooks/useWorkoutSchedule";

/** Workout drag item data */
export interface WorkoutDragItem {
  id: number;
  day: Weekday;
}

/** Hook for dragging workouts */
export const useWorkoutDrag = (workoutId: number, day: Weekday) => {
  return useDrag<WorkoutDragItem, unknown, { isWorkoutDragging: boolean }>({
    type: "workout",
    item: { id: workoutId, day },
    collect: (monitor) => ({
      isWorkoutDragging: monitor.isDragging(),
    }),
  });
};

/** Hook for dropping workouts onto a day */
export const useWorkoutDrop = (targetDay: Weekday) => {
  const { dispatch } = useWorkoutSchedule();

  return useDrop<WorkoutDragItem, void, { isWorkoutDropOver: boolean }>({
    accept: "workout",
    drop: (item) => {
      dispatch({
        type: ActionType.MOVE_WORKOUT,
        payload: {
          workoutId: item.id,
          fromDay: item.day,
          toDay: targetDay,
        },
      });
    },
    collect: (monitor) => ({
      isWorkoutDropOver: monitor.isOver(),
    }),
  });
};
