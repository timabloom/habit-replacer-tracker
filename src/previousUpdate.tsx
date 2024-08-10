function PreviousUpdate(props: { date: string, minutes: number }) {

    return (
        <>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">{props.date}</div>
                    <div className="stat-value">Time: {props.minutes}m</div>
                </div>
            </div>
        </>
    );
}

export default PreviousUpdate;