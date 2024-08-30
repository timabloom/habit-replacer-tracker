import { HabitsData } from "../types";
import AddHabitModal from "./addHabitModal";


function HabitsList({ habitsData }: { habitsData: HabitsData | undefined }) {

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl p-10 pt-16 pb-8">Your Habits</h1>
            <h2 className="text-2xl p-5 pb-8">Old Habits to be Replaced</h2>
            <div className="flex flex-col max-w-64">
                {habitsData?.oldHabits.map(habit =>
                    <div key={habit.id}>
                        <h3 className="text-xl">{habit.name}</h3>
                        <p className="pb-4">{habit.description}</p>
                    </div>
                )}
                <AddHabitModal habitType="old" />
            </div>
            <h2 className="text-2xl p-5 pb-8 pt-8">New Habits to Cultivate</h2>
            <div className="flex flex-col max-w-64">
                {habitsData?.newHabits.map(habit =>
                    <div key={habit.id}>
                        <h3 className="text-xl">{habit.name}</h3>
                        <p className="pb-4">{habit.description}</p>
                    </div>
                )}
                <AddHabitModal habitType="new" />
            </div>
        </div>
    );
}

export default HabitsList;