import { HabitStateManagement } from "../app";
import { HabitsData } from "../db";

function AddHabitModal(props: { habitType: string, habitsData: HabitsData, habitState: HabitStateManagement }) {
    const [habitName, setHabitName, habitDescription, setHabitDescription] = props.habitState;

    function handleModal(state: string) {
        const modal = document.getElementById(`${props.habitType}`) as HTMLDialogElement;
        return state === "open"
            ? modal.showModal()
            : modal.close();
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (props.habitType === "old") {
            props.habitsData.oldHabits.push({ id: `${crypto.randomUUID}`, name: habitName, description: habitDescription, timeSpent: [] });
        } else {
            props.habitsData.newHabits.push({ id: `${crypto.randomUUID}`, name: habitName, description: habitDescription, timeSpent: [] });
        }

        setHabitName("");
        setHabitDescription("");
        handleModal("close");
    }

    return (
        <>
            <button className="btn"
                onClick={() => handleModal("open")}>
                {props.habitType === "old" ? "Add Old" : "Add New"}
            </button>

            <dialog className="modal" id={props.habitType}>
                <div className="modal-box -mt-12 max-w-96">
                    <h3 className="font-bold text-xl">Add Habit</h3>
                    <p className="py-2">{props.habitType === "old" ? "Please share a bad habit to be replaced." : "Please share a new good habit."}</p>
                    <p className="text-lg py-1">Notice!</p>
                    <p className="py-2">This app currently only supports habits with a duration.</p>
                    <div className="modal-action justify-center">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => handleModal("close")}>✕</button>
                        <form style={{ margin: 0 }} method="dialog" onSubmit={handleSubmit}>
                            <label className="form-control w-full max-w-xs mb-5">
                                <div className="label">
                                    <span className="label-text -mt-8">Habit *</span>
                                </div>
                                <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Type here"
                                    value={habitName} onChange={(event) => setHabitName(event.target.value)} required />
                                <div className="label">
                                    <span className="label-text">Description</span>
                                </div>
                                <input className="input input-bordered w-full max-w-xs"
                                    type="text" placeholder="Type here"
                                    value={habitDescription} onChange={(event) => setHabitDescription(event.target.value)} />
                            </label>
                            <button className="btn btn-wide" type="submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </dialog >
        </>
    );
}

export default AddHabitModal;