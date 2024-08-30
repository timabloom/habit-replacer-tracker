import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateActivity } from "../api/requests.ts";

function UpdateActivityModal({ id, habitName }: { id: string, habitName: string }) {
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
    const [minutes, setMinutes] = useState("");

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: updateActivity,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["habits"] });
        },
    });

    function handleModal(state: string) {
        const modal = document.getElementById(`${id}`) as HTMLDialogElement;
        return state === "open"
            ? modal.showModal()
            : modal.close();
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        mutation.mutate({ id: id, date: date, minutes: parseInt(minutes) });
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

            <dialog className="modal" id={`${id}`}>
                <div className="modal-box -mt-12 max-w-96">
                    <h3 className="font-bold text-xl">Habit Activity</h3>
                    <p className="text-lg py-1">{habitName}</p>
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