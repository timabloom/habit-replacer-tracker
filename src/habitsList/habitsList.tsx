import { HabitStateManagement } from "../app";
import { HabitsData } from "../db";
import AddHabitModal from "./addHabitModal";


function HabitsList(props: {habitsData: HabitsData, habitState: HabitStateManagement}) {

    return (
        <>
            <h1>Your Habits</h1>
            <h2>Old Habits</h2>
            {props.habitsData.oldHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    <p>{habit.description}</p>
                </div>
            )}
            <AddHabitModal habitType="old" habitsData={props.habitsData} habitState={props.habitState} />
            
            <h2>New Habits</h2>
            {props.habitsData.newHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    <p>{habit.description}</p>
                </div>
            )}
            <AddHabitModal habitType="new" habitsData={props.habitsData} habitState={props.habitState} />
        </>
    );
}

export default HabitsList;