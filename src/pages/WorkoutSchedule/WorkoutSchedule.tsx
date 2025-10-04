import styles from "./WorkoutSchedule.module.scss";
import Week from "./Week/Week";
import { useEffect } from "react";
import useWorkoutSchedule from "@hooks/useWorkoutSchedule";
import { getWeekSchedule } from "@data/mockData";
import { ActionType } from "@data/actionTypes";

const WorkoutSchedule: React.FC = () => {
  const { dispatch } = useWorkoutSchedule();

  useEffect(() => {
    const weekSchedule = getWeekSchedule();
    dispatch({ type: ActionType.LOAD_DATA, payload: weekSchedule });
  }, [dispatch]);

  return (
    <div className={styles.workoutScheduleWrapper}>
      <Week />
    </div>
  );
};

export default WorkoutSchedule;
