import { ActivityStateManagement, Habit } from "./app";

function UpdateHabitModal(props: { id: number, habitName: string, habitActivity: Habit, activityState: ActivityStateManagement }) {
    const [date, setDate, minutes, setMinutes] = props.activityState;

    function handleModal(state: string) {
        const modal = document.getElementsByClassName("update-habit-modal") as HTMLCollectionOf<HTMLDialogElement>;
        if (state === "open") {
            modal[0].showModal();
        } else {
            modal[0].close();
        }
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        props.habitActivity.timeSpent.push({ date: date, minutes: minutes, id: 1 });

        console.log(props.habitActivity);
        setDate(new Date().toJSON().slice(0, 10));
        setMinutes(0);
        handleModal("close");
    }

    return (
        <>
            <button className="btn btn-wide"
                onClick={() => handleModal("open")}>
                Update
            </button>

            <dialog className="update-habit-modal modal">
                <div className="modal-box mb-24">
                    <h3 className="font-bold text-lg">Update Habit Activity</h3>
                    <p className="py-4">Add your recent activity for habit: {props.habitName}</p>
                    <div className="modal-action">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => handleModal("close")}>✕</button>
                        <form method="dialog" onSubmit={handleSubmit}>
                            <label className="form-control w-full max-w-xs">
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
                                    value={minutes} onChange={(event) => setMinutes(event.target.valueAsNumber)} />
                            </label>
                            <button className="btn btn-wide" type="submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </dialog >
        </>
    );
}

export default UpdateHabitModal;