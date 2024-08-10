import HabitsList from "./habitsList";
import Nav from "./nav";
import { useState } from "react";
import UpdateHabits from "./updateHabits";

export interface HabitsData {
  newHabits: Habit[];
  oldHabits: Habit[];
}

export interface Habit {
  id: number;
  name: string;
  description: string;
  timeSpent: HabitActivity[];
}

export interface HabitActivity {
  id: number;
  date: string;
  minutes: number;
}

export type HabitStateManagement = [
  habitName: string,
  setHabitName: React.Dispatch<React.SetStateAction<string>>,
  habitDescription: string,
  setHabitDescription: React.Dispatch<React.SetStateAction<string>>
]

export type ActivityStateManagement = [
  date: string,
  setDate: React.Dispatch<React.SetStateAction<string>>,
  minutes: number,
  setMinutes: React.Dispatch<React.SetStateAction<number>>
]

const habitsData: HabitsData = { newHabits: [], oldHabits: [] };

function App() {
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const habitState: HabitStateManagement = [habitName, setHabitName, habitDescription, setHabitDescription];

  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const [minutes, setMinutes] = useState(0);
  const activityState: ActivityStateManagement = [date, setDate, minutes, setMinutes];

  return (
    <>
      <main>
        <HabitsList habitsData={habitsData} habitState={habitState} />
        <UpdateHabits habitsData={habitsData} activityState={activityState} />
      </main>
      <Nav />
    </>
  );
}

export default App;
