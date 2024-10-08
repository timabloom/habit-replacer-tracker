import { HabitsData } from "../types";
import WeekBarChart from "./weekBarChart";

function HabitsStats({ habitsData }: { habitsData: HabitsData | undefined }) {
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl p-10 pt-16 pb-8">Statistics</h1>
                <h2 className="text-2xl p-5 pb-8">Activity Stats: Last 7 Days</h2>
            </div>
            <WeekBarChart habitsData={habitsData} />
        </>
    );
}

export default HabitsStats;