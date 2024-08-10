import { Habits } from "./habitsList";

function AddHabitModal(props: { habitType: string, habits: Habits, habitName: string, setHabitName: React.Dispatch<React.SetStateAction<string>>, habitDescription: string, setHabitDescription: React.Dispatch<React.SetStateAction<string>> }) {

    function handleModal(state: string) {
        const modal = document.getElementsByClassName("add-habit-modal") as HTMLCollectionOf<HTMLDialogElement>;
        if (state === "open" && props.habitType === "old") {
            modal[0].showModal();
        } else if (state === "open") {
            modal[1].showModal();
        } else if (props.habitType === "old") {
            modal[0].close();
        } else {
            modal[1].close();
        }
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (props.habitType === "old") {
            props.habits.oldHabits.push({ id: 1, name: props.habitName, description: props.habitDescription });
        } else {
            props.habits.newHabits.push({ id: 2, name: props.habitName, description: props.habitDescription });
        }

        props.setHabitName("");
        props.setHabitDescription("");
        handleModal("close");
    }

    return (
        <>
            <button className="btn btn-wide"
                onClick={() => handleModal("open")}>
                {props.habitType === "old" ? "Add Old" : "Add New"}
            </button>

            <dialog className="add-habit-modal modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Habit</h3>
                    <p className="py-4">This app currently only supports habits with a duration.</p>
                    <div className="modal-action">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => handleModal("close")}>✕</button>
                        <form method="dialog" onSubmit={handleSubmit}>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Habit *</span>
                                </div>
                                <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Type here"
                                    value={props.habitName} onChange={(event) => props.setHabitName(event.target.value)} required />
                                <div className="label">
                                    <span className="label-text">Description</span>
                                </div>
                                <input className="input input-bordered w-full max-w-xs"
                                    type="text" placeholder="Type here"
                                    value={props.habitDescription} onChange={(event) => props.setHabitDescription(event.target.value)} />
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