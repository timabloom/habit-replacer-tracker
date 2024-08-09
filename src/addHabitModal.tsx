function AddHabitModal(props: {habitType?: string}) {

    return (
        <>
            <button className="btn btn-wide" onClick={() => (document.getElementById("my_modal_1") as HTMLDialogElement).showModal()}>{props.habitType === "old" ? "Add Old Habit" : "Add New Habit"}</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Habit to the List</h3>
                    <p className="py-4">This app currently only supports habits with a duration.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Habit*:</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                <div className="label">
                                    <span className="label-text">Description:</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <button className="btn btn-wide">Submit Habit</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default AddHabitModal;