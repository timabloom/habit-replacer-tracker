import HabitsList from "./habitsList/habitsList";
import Nav from "./nav";
import { useState } from "react";
import UpdateActivity from "./updateActivity/updateActivity";
import { HabitsData } from "./types";
import HabitsStats from "./habitStats/habitStats";
import { useQuery } from "@tanstack/react-query";
import { getHabits } from "./api/requests";

function App() {
  const [displayNone, setDisplayNone] = useState(["", "hidden", "hidden"]);

  const { data } = useQuery<HabitsData>({
    queryFn: getHabits,
    queryKey: ["habits"],
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
