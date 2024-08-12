import { ActivityStateManagement } from "../app";
import { Habit } from "../db";

function UpdateActivityModal(props: { id: string, habitName: string, habitActivity: Habit, activityState: ActivityStateManagement }) {
    const [date, setDate, minutes, setMinutes] = props.activityState;

    function handleModal(state: string) {
        const modal = document.getElementById(`${props.id}`) as HTMLDialogElement;
        return state === "open"
            ? modal.showModal()
            : modal.close();
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        const activity = props.habitActivity.timeSpent.find(activity => activity.date === date);
        if (activity) {
            props.habitActivity.timeSpent.push({ date: date, minutes: activity.minutes += parseInt(minutes), id: `${crypto.randomUUID}` });
        }
        else {
            props.habitActivity.timeSpent.push({ date: date, minutes: parseInt(minutes), id: `${crypto.randomUUID}` });
        }
        setDate(new Date().toJSON().slice(0, 10));
        setMinutes("");
        handleModal("close");
    }

    return (
        <>
            <button className="btn"
                onClick={() => handleModal("open")}>
                Update
            </button>

            <dialog className="modal" id={`${props.id}`}>
                <div className="modal-box -mt-12 max-w-96">
                    <h3 className="font-bold text-xl">Habit Activity</h3>
                    <p className="text-lg py-1">{props.habitName}</p>
                    <p className="py-2">Please share your most recent activity in minutes.</p>
                    <div className="modal-action justify-center">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => handleModal("close")}>✕</button>
                        <form style={{ margin: 0 }} method="dialog" onSubmit={handleSubmit}>
                            <label className="form-control w-full max-w-xs mb-5">
                                <div className="label">
                                    <span className="label-text">Date *</span>
                                </div>
                                <input className="input input-bordered w-full max-w-xs" type="date" required
                                    value={date} onChange={(event) => setDate(event.target.value)} />
                                <div className="label">
                                    <span className="label-text">Minutes *</span>
                                </div>
                                <input className="input input-bordered w-full max-w-xs"
                                    type="number" min="1" max="1440" placeholder="0" required
                                    value={minutes} onChange={(event) => setMinutes(event.target.value)} />
                            </label>
                            <button className="btn btn-wide" type="submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </dialog >
        </>
    );
}

export default UpdateActivityModal;