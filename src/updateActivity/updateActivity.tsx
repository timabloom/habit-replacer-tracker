import { HabitsData } from "../types";
import TimeSpentCard from "./TimeSpentCard";

function UpdateActivity(props: { habitsData: HabitsData | undefined }) {

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl p-10 pt-16 pb-8">Habit Activity</h1>
            <h2 className="text-2xl p-5">Habits to be Replaced</h2>
            <div className="flex flex-wrap justify-center mb-5">
                {props.habitsData?.oldHabits.map(habit =>
                    <div key={habit.id}>
                        <h3 className="text-lg p-3">{habit.name}</h3>
                        <TimeSpentCard timeSpent={habit.timeSpent} id={habit.id} habitName={habit.name} habitActivity={habit} />
                    </div>
                )}
            </div>
            <h2 className="text-2xl p-5">New Habits to Cultivate</h2>
            <div className="flex flex-wrap justify-center">
                {props.habitsData?.newHabits.map(habit =>
                    <div key={habit.id}>
                        <h3 className="text-lg p-3">{habit.name}</h3>
                        <TimeSpentCard timeSpent={habit.timeSpent} id={habit.id} habitName={habit.name} habitActivity={habit} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default UpdateActivity;