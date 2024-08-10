import { HabitsData } from "./app";
import UpdateHabitModal from "./updateHabitModal";

function UpdateHabits(props: { habitsData: HabitsData }) {
    return (
        <>
            <h1>Your Habits</h1>
            <h2>Old Habits</h2>
            {props.habitsData.oldHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    <UpdateHabitModal id={habit.id} habitName={habit.name} habitActivity={habit} />
                </div>
            )}
            <h2>New Habits</h2>
            {props.habitsData.newHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    <UpdateHabitModal id={habit.id} habitName={habit.name} habitActivity={habit} />
                </div>
            )}
        </>
    );
}

export default UpdateHabits;