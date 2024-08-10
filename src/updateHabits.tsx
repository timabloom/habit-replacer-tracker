import { ActivityStateManagement, HabitsData } from "./app";
import PreviousUpdate from "./previousUpdate";
import UpdateHabitModal from "./updateHabitModal";

function UpdateHabits(props: { habitsData: HabitsData, activityState: ActivityStateManagement }) {
    return (
        <>
            <h1>Your Habits</h1>
            <h2>Old Habits</h2>
            {props.habitsData.oldHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    {habit.timeSpent.slice(habit.timeSpent.length - 1).map(activity =>
                        <PreviousUpdate key={activity.id} date={activity.date} minutes={activity.minutes} />
                    )}
                    <UpdateHabitModal id={habit.id} habitName={habit.name} habitActivity={habit} habitType={"old"} activityState={props.activityState} />
                </div>
            )}
            <h2>New Habits</h2>
            {props.habitsData.newHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    {habit.timeSpent.slice(habit.timeSpent.length - 1).map(activity =>
                        <PreviousUpdate key={activity.id} date={activity.date} minutes={activity.minutes} />
                    )}
                    <UpdateHabitModal id={habit.id} habitName={habit.name} habitActivity={habit} habitType={"new"} activityState={props.activityState} />
                </div>
            )}
        </>
    );
}

export default UpdateHabits;