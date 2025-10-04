import { useContext } from "react";
import { WorkoutScheduleContext } from "@/context/workoutScheduleContext";

const useWorkoutSchedule = () => {
  const context = useContext(WorkoutScheduleContext);

  if (context === undefined) {
    throw new Error(
      "useWorkoutSchedule must be used within a WorkoutScheduleProvider"
    );
  }

  return context;
};

export default useWorkoutSchedule;
