import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { HabitsData } from "../db";
import uniqolor from "uniqolor";
import { getAllActivityStats, getPreviousSevenDays } from "./processStats";

function WeekBarChart(props: { habitsData: HabitsData | undefined }) {

    return (
        <div className="w-auto ml-2 mr-4" >
            <ResponsiveContainer height={240}>
                <BarChart data={getPreviousSevenDays(getAllActivityStats(props.habitsData))} >
                    <XAxis dataKey="date" stroke="#000" />
                    <YAxis label={{ value: "minutes", angle: -90, position: "insideLeft" }}/>
                    <Tooltip />
                    <Legend />
                    {props.habitsData?.oldHabits.map(habit =>
                        <Bar key={habit.id} dataKey={habit.name} stackId="a" fill={`${uniqolor.random().color}`} barSize={10} />
                    )}
                    {props.habitsData?.newHabits.map(habit =>
                        <Bar key={habit.id} dataKey={habit.name} stackId="b" fill={`${uniqolor.random().color}`} barSize={10} />
                    )}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default WeekBarChart;