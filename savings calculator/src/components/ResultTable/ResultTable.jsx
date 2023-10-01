import { TableRowData } from './TableRowData';

export const ResultTable = ({ data, initialInvestment }) => {
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map((currentYear) => (
                    <TableRowData
                        key={currentYear.year}
                        data={currentYear}
                        initialInvestment={initialInvestment}
                    />
                ))}
            </tbody>
        </table>
    );
};
