import AddHabitModal from "./addHabitModal";
import { useState } from "react";

export interface Habits {
    newHabits: Habit[];
    oldHabits: Habit[];
}

interface Habit {
    id: number;
    name: string;
    description: string;
}

const habits: Habits = { newHabits: [], oldHabits: [] };

function HabitsList() {
    const [habitName, setHabitName] = useState("");
    const [habitDescription, setHabitDescription] = useState("");

    return (
        <>
            <h1>Your Habits</h1>
            <h2>Old Habits</h2>
            {habits.oldHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    <p>{habit.description}</p>
                </div>
            )}
            <AddHabitModal habitType="old" habits={habits} habitName={habitName} setHabitName={setHabitName} habitDescription={habitDescription} setHabitDescription={setHabitDescription} />
            
            <h2>New Habits</h2>
            {habits.newHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    <p>{habit.description}</p>
                </div>
            )}
            <AddHabitModal habitType="new" habits={habits} habitName={habitName} setHabitName={setHabitName} habitDescription={habitDescription} setHabitDescription={setHabitDescription} />
        </>
    );
}

export default HabitsList;