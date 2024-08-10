import { ActivityStateManagement } from "../app";
import { HabitsData } from "../db";
import PreviousActivityUpdate from "./previousActivityUpdate";
import UpdateActivityModal from "./updateActivityModal";

function UpdateActivity(props: { habitsData: HabitsData, activityState: ActivityStateManagement }) {
    return (
        <>
            <h1>Your Habits</h1>
            <h2>Old Habits</h2>
            {props.habitsData.oldHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    {habit.timeSpent.slice(habit.timeSpent.length - 1).map(activity =>
                        <PreviousActivityUpdate key={activity.id} date={activity.date} minutes={activity.minutes} />
                    )}
                    <UpdateActivityModal id={habit.id} habitName={habit.name} habitActivity={habit} activityState={props.activityState} />
                </div>
            )}
            <h2>New Habits</h2>
            {props.habitsData.newHabits.map(habit =>
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    {habit.timeSpent.slice(habit.timeSpent.length - 1).map(activity =>
                        <PreviousActivityUpdate key={activity.id} date={activity.date} minutes={activity.minutes} />
                    )}
                    <UpdateActivityModal id={habit.id} habitName={habit.name} habitActivity={habit} activityState={props.activityState} />
                </div>
            )}
        </>
    );
}

export default UpdateActivity;