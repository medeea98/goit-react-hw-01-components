import css from './Statistics.module.css';

export const Statistics = (props) => {
    return (
        <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css['stat-list']}>
            {props.stats.map((stat) => (
                <li className={css.item}>
                    <span className={css.label}>{ stat.label }</span>
                    <span className={css.percentage}>{ stat.percentage }%</span>
                </li>
            ))}
        </ul>
        </section>
    );
}