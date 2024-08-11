import HabitsList from "./habitsList/habitsList";
import Nav from "./nav";
import { useState } from "react";
import UpdateActivity from "./updateActivity/updateActivity";
import habitsData from "./db";
import HabitsStats from "./habitStats/habitStats";

export type HabitStateManagement = [
  habitName: string,
  setHabitName: React.Dispatch<React.SetStateAction<string>>,
  habitDescription: string,
  setHabitDescription: React.Dispatch<React.SetStateAction<string>>
]

export type ActivityStateManagement = [
  date: string,
  setDate: React.Dispatch<React.SetStateAction<string>>,
  minutes: string,
  setMinutes: React.Dispatch<React.SetStateAction<string>>
]

function App() {
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const habitState: HabitStateManagement = [habitName, setHabitName, habitDescription, setHabitDescription];

  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const [minutes, setMinutes] = useState("");
  const activityState: ActivityStateManagement = [date, setDate, minutes, setMinutes];

  return (
    <>
      <main>
        <HabitsList habitsData={habitsData} habitState={habitState} />
        <UpdateActivity habitsData={habitsData} activityState={activityState} />
        <HabitsStats habitsData={habitsData} />
      </main>
      <Nav />
    </>
  );
}

export default App;
