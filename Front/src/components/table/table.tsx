import React from 'react';

const TableComponent = ({ data, check }) =>
{
    const headers = data[ 0 ] ? Object.keys(data[0]) : [];
    const rows = data;

    const handleOnChangeCheck = (position) => {
        const updatedCheckedState = check.checkedState.map((item, index) =>
        index === position ? !item : item
        );
        check.setCheckedState(updatedCheckedState);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th />
                    { headers.map((header, index) => <th key={ index }>{ header.charAt(0).toUpperCase() + header.slice(1) }</th>) }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map(
                        (row, index) => (
                            row["deposito"] === 1 && row["precio"] > 0 && !(/[^a-zA-Z0-9\s]/.test(row["descripcion"])) && <tr key={ index }>
                                <td key={ index }>{ <input type="checkbox" name={index} value={""} checked={check.checkedState[index]} onChange={() => handleOnChangeCheck(index)} /> }</td>
                                { Object.values(row).map((cell: any, index) => <td key={ index }>{ cell }</td>) }
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    );
};

export default TableComponent;