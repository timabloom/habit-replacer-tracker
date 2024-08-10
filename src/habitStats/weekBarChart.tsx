import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function WeekBarChart() {
    const data = [
        { name: "Day 1", oldHabits: 60, reading: 20, painting: 50 },
        { name: "Day 2", oldHabits: 160, reading: 40 },
        { name: "Day 3", oldHabits: 60, reading: 20 },
        { name: "Day 4", oldHabits: 50, reading: 40 },
        { name: "Day 5", oldHabits: 60, reading: 10 },
        { name: "Day 6", oldHabits: 90, reading: 40 },
        { name: "Day 7", oldHabits: 0, reading: 40 },
    ];

    return (
        <div className="w-auto mb-20 mr-5" >
            <ResponsiveContainer height={240}>
                <BarChart data={data} >
                    <XAxis dataKey="name" stroke="#000" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="oldHabits" fill="#000" barSize={10} />
                    <Bar dataKey="reading" stackId="a" fill="#8884d8" barSize={10} />
                    <Bar dataKey="painting" stackId="a" fill="#82ca9d" barSize={10} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default WeekBarChart;