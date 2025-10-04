import styles from "./App.module.scss";
import WorkoutSchedule from "@/pages/WorkoutSchedule/WorkoutSchedule";
import { WorkoutScheduleProvider } from "@/context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <WorkoutScheduleProvider>
        <div className={styles.appWrapper}>
          <WorkoutSchedule />
        </div>
      </WorkoutScheduleProvider>
    </DndProvider>
  );
};

export default App;
