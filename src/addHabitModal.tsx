import { useState } from "react";

function AddHabitModal(props: { habitType: string }) {
    const [habitName, setHabitName] = useState("");
    const [habitDescription, setHabitDescription] = useState("");

    interface Habits {
        newHabits: Habit[];
        oldHabits: Habit[];
    }

    interface Habit {
        name: string;
        description: string;
    }

    const habits: Habits = { newHabits: [], oldHabits: [] };

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (props.habitType === "old") {
            habits.oldHabits.push({ name: habitName, description: habitDescription });
        } else {
            habits.newHabits.push({ name: habitName, description: habitDescription });
        }

        console.log(habits);

        setHabitName("");
        setHabitDescription("");
        handleModal("close");
    }

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

    return (
        <>
            <button className="btn btn-wide"
                onClick={() => handleModal("open")}>
                {props.habitType === "old" ? "Add Old Habit" : "Add New Habit"}
            </button>

            <dialog className="add-habit-modal modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Habit to the List</h3>
                    <p className="py-4">This app currently only supports habits with a duration.</p>
                    <div className="modal-action">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => handleModal("close")}>✕</button>
                        <form method="dialog" onSubmit={handleSubmit}>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Habit*:</span>
                                </div>
                                <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Type here"
                                    value={habitName} onChange={(event) => setHabitName(event.target.value)} required />
                                <div className="label">
                                    <span className="label-text">Description:</span>
                                </div>
                                <input className="input input-bordered w-full max-w-xs"
                                    type="text" placeholder="Type here"
                                    value={habitDescription} onChange={(event) => setHabitDescription(event.target.value)} />
                            </label>
                            <button className="btn btn-wide" type="submit" >Submit Habit</button>
                        </form>
                    </div>
                </div>
            </dialog >
        </>
    );
}

export default AddHabitModal;