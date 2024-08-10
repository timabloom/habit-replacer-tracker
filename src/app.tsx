import HabitsList from "./habitsList";
import Nav from "./nav";
import { useState } from "react";
import UpdateHabits from "./updateHabits";

export interface HabitsData {
  newHabits: Habit[];
  oldHabits: Habit[];
}

interface Habit {
  id: number;
  name: string;
  description: string;
}

export type HabitStateManagement = [
  habitName: string,
  setHabitName: React.Dispatch<React.SetStateAction<string>>,
  habitDescription: string,
  setHabitDescription: React.Dispatch<React.SetStateAction<string>>
]

const habitsData: HabitsData = { newHabits: [], oldHabits: [] };

function App() {
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const habitState: HabitStateManagement = [habitName, setHabitName, habitDescription, setHabitDescription];

  return (
    <>
      <main>
        <HabitsList habitsData={habitsData} habitState={habitState} />
        <UpdateHabits habitsData={habitsData} habitState={habitState}/> 
      </main>
      <Nav />
    </>
  );
}

export default App;
