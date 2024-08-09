import { useState } from "react";



function AddHabitModal(props: { habitType?: string }) {
    const [habitName, setHabitName] = useState("");
    const [habitDescription, setHabitDescription] = useState("");

    interface Habits {
        newHabits: Habit[];
    }

    interface Habit {
        name: string;
        description: string;
    }

    const habits: Habits = { newHabits: [] };

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        habits.newHabits.push({ name: habitName, description: habitDescription });
        console.log(habits);
        setHabitName("");
        setHabitDescription("");

    }

    function handleModal(state: string) {
        const modal = document.getElementById("add-habit-modal") as HTMLDialogElement;
        if (state === "open") {
            return modal.showModal();
        }
        return modal.close();
    }

    return (
        <>
            <button className="btn btn-wide"
                onClick={() => handleModal("open")}>
                {props.habitType === "old" ? "Add Old Habit" : "Add New Habit"}
            </button>
            <dialog id="add-habit-modal" className="modal">
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