import styles from "./WeekDay.module.scss";
import { getDateInfo } from "@utils/dateTime";
import IconButton from "@components/Button/IconButton";
import Workout from "@/pages/WorkoutSchedule/Workout/Workout";
import { useWorkoutDrop } from "@hooks/useWorkoutDropAndDrag";
import type { Workout as WorkoutType } from "@data/types";

interface WeekDayProps {
  date: Date;
  workouts: WorkoutType[];
  addable?: boolean;
}

const WeekDay: React.FC<WeekDayProps> = ({ date, addable, workouts }) => {
  const dateInfo = getDateInfo(date);

  const handleAddWorkout = () => {
    alert("Not implemented yet");
  };

  const [{ isWorkoutDropOver }, weekdayDropRef] = useWorkoutDrop(
    dateInfo.weekDay
  );

  const wrapperClasses = [
    styles.weekDayWrapper,
    isWorkoutDropOver && styles.dropOver,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={weekdayDropRef} className={wrapperClasses}>
      <p className={styles.weekDayHeader}>{dateInfo.weekDay.toUpperCase()}</p>
      <div className={styles.weekDayContent}>
        <h3
          className={`${styles.weekDayTitle} ${dateInfo.isToday ? styles.active : ""}`}
        >
          {dateInfo.monthDay}
          {addable && (
            <IconButton
              variant="contained"
              icon="+"
              onClick={handleAddWorkout}
            />
          )}
        </h3>
        {workouts.map((workout) => (
          <Workout
            weekday={dateInfo.weekDay}
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </div>
  );
};

export default WeekDay;
