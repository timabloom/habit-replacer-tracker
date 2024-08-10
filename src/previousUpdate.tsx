function PreviousUpdate(props: { date: string, minutes: number }) {

    return (
        <>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Previous Activity</div>
                    <div className="stat-value">Time: {props.minutes}m</div>
                    <div className="stat-desc">{props.date}</div>
                </div>
            </div>
        </>
    );
}

export default PreviousUpdate;