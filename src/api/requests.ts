export async function getHabits() {
    const response = await fetch("http://localhost:5018/habits");
    return response.json();
}

export async function addNewHabit({ name, description }: { name: string, description: string }) {
    const response = await fetch("http://localhost:5018/habits/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            description: description
        }),
    });
    return response.json();
}

export async function addOldHabit({ name, description }: { name: string, description: string }) {
    const response = await fetch("http://localhost:5018/habits/old", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            description: description
        }),
    });
    return response.json();
}

export async function updateActivity({ id, date, minutes }: { id: string, date: string, minutes: number }) {
    const response = await fetch(`http://localhost:5018/habits/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            date: date,
            minutes: minutes
        }),
    });
    return response.json();
}