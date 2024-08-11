export interface HabitsData {
    newHabits: Habit[];
    oldHabits: Habit[];
}

export interface Habit {
    id: string;
    name: string;
    description: string;
    timeSpent: HabitActivity[];
}

interface HabitActivity {
    id: string;
    date: string;
    minutes: number;
}

const habitsData: HabitsData = {
    newHabits: [
        {
            id: "1",
            name: "Gym Training",
            description: "Start going to the gym three times a week for 60 minutes",
            timeSpent: [
                { id: "1", date: "2024-08-01", minutes: 30 },
                { id: "2", date: "2024-08-02", minutes: 35 },
                { id: "3", date: "2024-08-03", minutes: 40 },
                { id: "7", date: "2024-08-07", minutes: 60 },
                { id: "8", date: "2024-08-08", minutes: 65 },
            ],
        },
        {
            id: "2",
            name: "Reading",
            description: "Read a book for at least 20 minutes a day",
            timeSpent: [
                { id: "1", date: "2024-08-01", minutes: 25 },
                { id: "2", date: "2024-08-02", minutes: 20 },
                { id: "3", date: "2024-08-03", minutes: 30 },
                { id: "5", date: "2024-08-05", minutes: 28 },
                { id: "7", date: "2024-08-07", minutes: 24 },
                { id: "8", date: "2024-08-08", minutes: 32 },
            ],
        },
    ],
    oldHabits: [
        {
            id: "3",
            name: "Social Media Browsing",
            description: "Reduce time spent on social media",
            timeSpent: [
                { id: "1", date: "2024-08-01", minutes: 120 },
                { id: "2", date: "2024-08-02", minutes: 110 },
                { id: "3", date: "2024-08-03", minutes: 100 },
                { id: "5", date: "2024-08-05", minutes: 80 },
                { id: "7", date: "2024-08-07", minutes: 60 },
                { id: "8", date: "2024-08-08", minutes: 50 },
            ],
        },
    ],
};


export default habitsData;