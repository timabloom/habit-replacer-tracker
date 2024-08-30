export async function getHabits() {
    const response = await fetch("http://localhost:5018/habits");
    return response.json();
}

export async function addNewHabit(props: { name: string, description: string }) {
    const response = await fetch("http://localhost:5018/habits/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: props.name,
            description: props.description
        }),
    });
    return response.json();
}

export async function addOldHabit(props: { name: string, description: string }) {
    const response = await fetch("http://localhost:5018/habits/old", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: props.name,
            description: props.description
        }),
    });
    return response.json();
}

export async function updateActivity(props: { id: string, date: string, minutes: number }) {
    const response = await fetch(`http://localhost:5018/habits/${props.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            date: props.date,
            minutes: props.minutes
        }),
    });
    return response.json();
}