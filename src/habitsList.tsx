import AddHabitModal from "./addHabitModal";

function HabitsList() {
    return (
        <>
            <h1>Your Habits</h1>
            <h2>Old Habits</h2>
            <AddHabitModal habitType="old" />
            <h2>New Habits</h2>
            <AddHabitModal habitType="new" />
        </>
    );
}

export default HabitsList;