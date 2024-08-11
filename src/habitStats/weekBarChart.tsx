import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { HabitsData } from "../db";
import uniqolor from "uniqolor";

type HabitsStats = { id: string; name: string }[]
type ActivityStats = { id: string; date: string;[x: string]: string | number; }[]

function WeekBarChart(props: { habitsData: HabitsData }) {

    const oldHabitsStats: HabitsStats = [];
    const newHabitsStats: HabitsStats = [];
    const allActivityStats: ActivityStats = [];

    props.habitsData.oldHabits.map(habit => {
        habit.timeSpent.map(timeSpent => {
            const habitExist = oldHabitsStats.find(name => name.name === habit.name);
            if (!habitExist) {
                oldHabitsStats.push({ id: habit.id, name: habit.name });
            }
            const activityExist = allActivityStats.find(d => d.date === timeSpent.date.slice(5));
            if (!activityExist) {
                allActivityStats.push({ id: timeSpent.id, date: timeSpent.date.slice(5), [habit.name]: timeSpent.minutes });
            } else {
                activityExist[habit.name] = timeSpent.minutes;
            }
        });
    });

    props.habitsData.newHabits.map(habit => {
        habit.timeSpent.map(timeSpent => {
            const habitExist = newHabitsStats.find(name => name.name === habit.name);
            if (!habitExist) {
                newHabitsStats.push({ id: habit.id, name: habit.name });
            }
            const activityExist = allActivityStats.find(d => d.date === timeSpent.date.slice(5));
            if (!activityExist) {
                allActivityStats.push({ id: timeSpent.id, date: timeSpent.date.slice(5), [habit.name]: timeSpent.minutes });
            } else {
                activityExist[habit.name] = timeSpent.minutes;
            }
        });
    });

    const currentDay = parseInt(new Date().toJSON().slice(8, 10));
    const currentMonth = new Date().toJSON().slice(5, 7);
    const previousSevenDays: ActivityStats = [];
    for (let i = currentDay - 1; i > currentDay - 8; i--) {
        const activityDay = allActivityStats.find(activity => parseInt(activity.date.slice(3)) === i);
        if (activityDay) {
            previousSevenDays.unshift(activityDay);
        } else {
            previousSevenDays.unshift({ id: `${i}`, date: `${i > 9 ? `${currentMonth}-${i}` : `${currentMonth}-0${i}`}` });
        }
    }

    return (
        <div className="w-auto mb-20 mr-5" >
            <ResponsiveContainer height={240}>
                <BarChart data={previousSevenDays} >
                    <XAxis dataKey="date" stroke="#000" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {oldHabitsStats.map(habit =>
                        <Bar key={habit.id} dataKey={habit.name} fill={`${uniqolor.random().color}`} barSize={10} />
                    )}
                    {newHabitsStats.map(habit =>
                        <Bar key={habit.id} dataKey={habit.name} stackId="a" fill={`${uniqolor.random().color}`} barSize={10} />
                    )}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default WeekBarChart;