import { useDrag, useDrop } from "react-dnd";
import { ActionType } from "@data/actionTypes";
import useWorkoutSchedule from "@hooks/useWorkoutSchedule";

export interface ExerciseDragItem {
  id: number;
  workoutId: number;
}

export const useExerciseDrag = (exerciseId: number, workoutId: number) => {
  return useDrag<ExerciseDragItem, unknown, { isExerciseDragging: boolean }>({
    type: "exercise",
    item: { id: exerciseId, workoutId },
    collect: (monitor) => ({
      isExerciseDragging: monitor.isDragging(),
    }),
  });
};

export const useExerciseSwapDrop = (
  currentExerciseId: number,
  currentWorkoutId: number
) => {
  const { dispatch } = useWorkoutSchedule();

  return useDrop<ExerciseDragItem, void, { isExerciseHovering: boolean }>({
    accept: "exercise",
    drop: (draggedItem) => {
      if (draggedItem.workoutId === currentWorkoutId) {
        /** Same workout - swap positions */
        dispatch({
          type: ActionType.SWAP_EXERCISES,
          payload: {
            workoutId: currentWorkoutId,
            exerciseId1: draggedItem.id,
            exerciseId2: currentExerciseId,
          },
        });
      } else {
        /** Different workout - move exercise */
        dispatch({
          type: ActionType.MOVE_EXERCISE,
          payload: {
            exerciseId: draggedItem.id,
            fromWorkoutId: draggedItem.workoutId,
            toWorkoutId: currentWorkoutId,
          },
        });
      }
    },
    canDrop: (item) => item.id !== currentExerciseId,
    collect: (monitor) => ({
      isExerciseHovering: monitor.isOver() && monitor.canDrop(),
    }),
  });
};

export const useExerciseDrop = (targetWorkoutId: number) => {
  const { dispatch } = useWorkoutSchedule();

  return useDrop<ExerciseDragItem, void, { isExerciseDropOver: boolean }>({
    accept: "exercise",
    drop: (item) => {
      dispatch({
        type: ActionType.MOVE_EXERCISE,
        payload: {
          exerciseId: item.id,
          fromWorkoutId: item.workoutId,
          toWorkoutId: targetWorkoutId,
        },
      });
    },
    collect: (monitor) => ({
      isExerciseDropOver: monitor.isOver(),
    }),
  });
};
