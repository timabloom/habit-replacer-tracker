import HabitsList from "./habitsList/habitsList";
import Nav from "./nav";
import { useState } from "react";
import UpdateActivity from "./updateActivity/updateActivity";
import { HabitsData } from "./types";
import HabitsStats from "./habitStats/habitStats";
import {
  useQuery
} from "@tanstack/react-query";

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
  const [displayNone, setDisplayNone] = useState(["", "hidden", "hidden"]);

  const { data } = useQuery<HabitsData>({
    queryKey: ["habits"],
    queryFn: () => fetch("http://localhost:5018/habits").then((result) =>
      result.json(),
    )
  });

  return (
    <>
      <main>
        <div className={`${displayNone[0]} mb-20`}>
          <HabitsList habitsData={data} />
        </div>
        <div className={`${displayNone[1]} mb-20`}>
          <UpdateActivity habitsData={data} />
        </div>
        <div className={`${displayNone[2]} mb-20`}>
          <HabitsStats habitsData={data} />
        </div>
      </main>
      <Nav displayNone={setDisplayNone} />
    </>
  );
}

export default App;
