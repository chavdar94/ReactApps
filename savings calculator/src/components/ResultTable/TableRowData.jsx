export const TableRowData = (props) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const totalInterestGained =
        props.data.savingsEndOfYear -
        props.initialInvestment -
        props.data.yearlyContribution * props.data.year;

    const totalIncestedCapital =
        props.initialInvestment +
        props.data.yearlyContribution * props.data.year;

    return (
        <tr>
            <td>{props.data.year}</td>
            <td>{formatter.format(props.data.savingsEndOfYear)}</td>
            <td>{formatter.format(props.data.yearlyInterest)}</td>
            <td>{formatter.format(totalInterestGained)}</td>
            <td>{formatter.format(totalIncestedCapital)}</td>
        </tr>
    );
};
