import styles from "./Exercise.module.scss";
import Typography from "@components/Typography/Typography";
import type { Exercise as ExerciseType } from "@data/types";
import {
  useExerciseDrag,
  useExerciseSwapDrop,
} from "@hooks/useExerciseDropAndDrag";

interface ExerciseProps {
  exercise: ExerciseType;
  workoutId: number;
}

const Exercise: React.FC<ExerciseProps> = ({ exercise, workoutId }) => {
  const [{ isExerciseDragging }, exerciseDragRef] = useExerciseDrag(
    exercise.id,
    workoutId
  );

  const [{ isExerciseHovering }, exerciseDropRef] = useExerciseSwapDrop(
    exercise.id,
    workoutId
  );

  /** Combine drag and drop refs */
  const combinedRef = (element: HTMLDivElement | null) => {
    if (element) {
      exerciseDragRef(element);
      exerciseDropRef(element);
    }
  };

  return (
    <div
      ref={combinedRef}
      className={`${styles.exerciseWrapper} ${isExerciseHovering ? styles.hovering : ""}`}
      style={{
        opacity: isExerciseDragging ? 0.5 : undefined,
        borderColor: isExerciseHovering ? "var(--active)" : undefined,
        borderWidth: isExerciseHovering ? "2px" : undefined,
      }}
    >
      <div className={styles.exerciseHeader}>
        <Typography variant="h6">{exercise.name}</Typography>
      </div>
      <div className={styles.exerciseDetail}>
        <Typography variant="body1">{exercise.sets}x</Typography>
        <Typography variant="body2">{exercise.details}</Typography>
      </div>
    </div>
  );
};

export default Exercise;
