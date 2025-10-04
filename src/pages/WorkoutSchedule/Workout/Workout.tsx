import styles from "./Workout.module.scss";
import Typography from "@components/Typography/Typography";
import IconButton from "@components/Button/IconButton";
import Exercise from "./Exercise/Exercise";
import type { Weekday, Workout as WorkoutType } from "@data/types";
import { useExerciseDrop } from "@hooks/useExerciseDropAndDrag";
import { useWorkoutDrag } from "@hooks/useWorkoutDropAndDrag";
import type { LegacyRef } from "react";

interface WorkoutProps {
  workout: WorkoutType;
  weekday: Weekday;
}

const Workout: React.FC<WorkoutProps> = ({ workout, weekday }) => {
  const [{ isWorkoutDragging }, workoutDragRef] = useWorkoutDrag(
    workout.id,
    weekday
  );
  const [{ isExerciseDropOver }, workoutDropRef] = useExerciseDrop(workout.id);

  const handleAddExercise = () => {
    alert("Not implemented yet");
  };

  const handleOpenMenu = () => {
    alert("Not implemented yet");
  };

  /** Combine drag and drop refs */
  const combinedRef = (element: HTMLElement | null) => {
    if (element) {
      workoutDragRef(element);
      workoutDropRef(element);
    }
  };

  const wrapperClasses = [
    styles.workoutWrapper,
    isWorkoutDragging && styles.dragging,
    isExerciseDropOver && styles.dropTarget,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={combinedRef as LegacyRef<HTMLDivElement>}
      className={wrapperClasses}
    >
      <div className={styles.workoutHeader}>
        <Typography variant="h5">{workout.name}</Typography>
        <IconButton variant="icon" icon="..." onClick={handleOpenMenu} />
      </div>
      <div className={styles.workoutContent}>
        {workout.exercises.map((exercise) => (
          <Exercise
            workoutId={workout.id}
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>
      <div className={styles.workoutFooter}>
        <IconButton variant="contained" icon="+" onClick={handleAddExercise} />
      </div>
    </div>
  );
};

export default Workout;
