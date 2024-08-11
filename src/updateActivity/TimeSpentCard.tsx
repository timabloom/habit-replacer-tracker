import { HabitActivity } from "../db";

function TimeSpentCard(props: { timeSpent: HabitActivity[] }) {
    const todaysDate = new Date().toJSON().slice(0, 10);

    const datesToNumbers = props.timeSpent.map(item => new Date(item.date).getTime());
    const previousActivityDate = new Date(Math.max(...datesToNumbers)).toJSON().slice(0, 10);
    const previousActivity = props.timeSpent.find(activity => activity.date === previousActivityDate);

    return (
        <>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Time Spent Today</div>
                    <div className="stat-value">{previousActivity?.date === todaysDate ? previousActivity?.minutes : 0}m</div>
                    <div className="stat-desc">{todaysDate}</div>
                </div>
            </div>
        </>
    );
}

export default TimeSpentCard;