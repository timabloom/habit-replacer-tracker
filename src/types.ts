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

export interface HabitActivity {
    id: string;
    date: string;
    minutes: number;
}