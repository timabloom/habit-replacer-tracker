import { HabitsData } from "../db";
import WeekBarChart from "./weekBarChart";

function HabitsStats(props: { habitsData: HabitsData }) {
    return (
        <WeekBarChart habitsData={props.habitsData} />
    );
}

export default HabitsStats;