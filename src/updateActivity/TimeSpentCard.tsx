import { getPreviousActivity } from "../habitStats/processStats";
import { HabitActivity } from "../types";
import UpdateActivityModal from "./updateActivityModal";

function TimeSpentCard({ timeSpent, id, habitName }: { timeSpent: HabitActivity[], id: string, habitName: string }) {
    const todaysDate = new Date().toJSON().slice(0, 10);

    return (
        <>
            <div className="stats shadow bg-primary text-primary-content ml-3 mr-3">
                <div className="stat">
                    <div className="stat-title">Time Spent Today</div>
                    <div className="stat-value">{getPreviousActivity(timeSpent)}m</div>
                    <div className="stat-desc pb-2">{todaysDate}</div>
                    <UpdateActivityModal id={id} habitName={habitName} />
                </div>
            </div>
        </>
    );
}

export default TimeSpentCard;