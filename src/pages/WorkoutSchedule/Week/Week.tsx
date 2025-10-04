import WeekDay from "./WeekDay/WeekDay";
import styles from "./Week.module.scss";
import { getCurrentWeek, getDateInfo } from "@utils/dateTime";
import useWorkoutSchedule from "@hooks/useWorkoutSchedule";

const Week = () => {
  const {
    state: { weekSchedule },
  } = useWorkoutSchedule();

  const currentWeekDays = getCurrentWeek();

  const daysWithWorkouts = currentWeekDays.map((date) => {
    const dateInfo = getDateInfo(date);

    const workouts =
      weekSchedule.find((daySchedule) => daySchedule.day === dateInfo.weekDay)
        ?.workouts ?? [];

    return {
      date,
      workouts,
    };
  });

  return (
    <div className={styles.weekWrapper}>
      {daysWithWorkouts.map(({ date, workouts }, index) => {
        return (
          <WeekDay
            key={date.toDateString()}
            date={date}
            workouts={workouts}
            addable={index % 2 === 0}
          />
        );
      })}
    </div>
  );
};

export default Week;
