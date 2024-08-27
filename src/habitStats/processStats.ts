import { HabitsData } from "../db";

type ActivityStats = { id: string; date: string;[x: string]: string | number; }[]

export function getAllActivityStats(habitsData: HabitsData | undefined) {
    const allActivityStats: ActivityStats = [];

    habitsData?.oldHabits.map(habit => {
        habit.timeSpent.map(timeSpent => {
            const activityExist = allActivityStats.find(d => d.date === timeSpent.date.slice(5));
            if (!activityExist) {
                allActivityStats.push({ id: timeSpent.id, date: timeSpent.date.slice(5), [habit.name]: timeSpent.minutes });
            } else {
                activityExist[habit.name] = timeSpent.minutes;
            }
        });
    });

    habitsData?.newHabits.map(habit => {
        habit.timeSpent.map(timeSpent => {
            const activityExist = allActivityStats.find(d => d.date === timeSpent.date.slice(5));
            if (!activityExist) {
                allActivityStats.push({ id: timeSpent.id, date: timeSpent.date.slice(5), [habit.name]: timeSpent.minutes });
            } else {
                activityExist[habit.name] = timeSpent.minutes;
            }
        });
    });
    return allActivityStats;
}

export function getPreviousSevenDays(stats: ActivityStats) {
    const previousSevenDays: ActivityStats = [];
    const currentDay = parseInt(new Date().toJSON().slice(8, 10));
    const currentMonth = new Date().toJSON().slice(5, 7);
    for (let i = currentDay - 1; i > currentDay - 8; i--) {
        const activityDay = stats.find(activity => parseInt(activity.date.slice(3)) === i);
        if (activityDay) {
            previousSevenDays.unshift(activityDay);
        } else {
            previousSevenDays.unshift({ id: `${i}`, date: `${i > 9 ? `${currentMonth}-${i}` : `${currentMonth}-0${i}`}` });
        }
    }
    return previousSevenDays;
}