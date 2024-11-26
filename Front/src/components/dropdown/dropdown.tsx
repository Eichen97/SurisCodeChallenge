import React from 'react';

const DropDownComponent = ({ data, handleChange, selectedValue }) =>
{
    return (
        <select id="sellers" value={selectedValue} onChange={event => handleChange(event.target.value)}>
            <option hidden>-- Seleccione Vendedor --</option>
            {
                data.map((item) => <option key={item.id} value={item.descripcion} >{item.descripcion}</option>)
            }
        </select>
    );
};

export default DropDownComponent;