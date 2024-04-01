import css from './TransactionHistory.module.css'; 

export const TransactionHistory = (props) => {
    return (
        <table class={css['transaction-history']}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {props.items.map((item) => (
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}