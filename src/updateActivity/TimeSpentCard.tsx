import { ActivityStateManagement } from "../app";
import { Habit, HabitActivity } from "../db";
import UpdateActivityModal from "./updateActivityModal";

function TimeSpentCard(props: { timeSpent: HabitActivity[], id: string, habitName: string, habitActivity: Habit, activityState: ActivityStateManagement }) {
    const todaysDate = new Date().toJSON().slice(0, 10);
    const previousActivity = getPreviousActivity(props.timeSpent);

    function getPreviousActivity(timeSpent: HabitActivity[]) {
        if (timeSpent.length === 0) {
            return;
        }
        const datesToNumbers = timeSpent.map(item => new Date(item.date).getTime());
        const previousActivityDate = new Date(Math.max(...datesToNumbers)).toJSON().slice(0, 10);
        return timeSpent.find(activity => activity.date === previousActivityDate);
    }

    return (
        <>
            <div className="stats shadow bg-primary text-primary-content ml-3 mr-3">
                <div className="stat">
                    <div className="stat-title">Time Spent Today</div>
                    <div className="stat-value">{previousActivity?.date === todaysDate ? previousActivity?.minutes : 0}m</div>
                    <div className="stat-desc pb-2">{todaysDate}</div>
                    <UpdateActivityModal id={props.id} habitName={props.habitName} habitActivity={props.habitActivity} activityState={props.activityState} />
                </div>
            </div>
        </>
    );
}

export default TimeSpentCard;