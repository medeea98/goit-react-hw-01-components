import css from './Statistics.module.css';

export const Statistics = (props) => {
    return (
        <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css['stat-list']}>
            <li className={css.item}>
                <span className={css.label}>{ props.stats[0].label }</span>
                <span className={css.percentage}>{ props.stats[0].percentage }%</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>{ props.stats[1].label }</span>
                <span className={css.percentage}>{ props.stats[1].percentage }%</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>{ props.stats[2].label }</span>
                <span className={css.percentage}>{ props.stats[2].percentage }%</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>{ props.stats[3].label }</span>
                <span className={css.percentage}>{ props.stats[3].percentage }%</span>
            </li>
        </ul>
        </section>
    );
}