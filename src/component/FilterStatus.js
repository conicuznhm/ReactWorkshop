import { useState } from "react";

const FilterStatus = ({onChange}) => {
    const [filterStatus, setFilterStatus] = useState('');

    const handleChangeFilter = (e) => {
        onChange(e.target.value);
        setFilterStatus(e.target.value);
        // e.target.checked && setFilterStatus(e.target.value);
    }

    return (
        <div className="btn-group" role="group">
            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                value=''
                checked={filterStatus === ''}
                onChange={handleChangeFilter}
            />
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
                <i className="fa-solid fa-bars"></i>
            </label>

            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                value='done'
                checked={filterStatus === 'done'}
                onChange={handleChangeFilter}
            />
            <label className="btn btn-outline-success" htmlFor="btnradio2">
                <i className="fa-solid fa-clipboard-check"></i>
            </label>

            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                value='notDone'
                checked={filterStatus === 'notDone'}
                onChange={handleChangeFilter}
            />
            <label className="btn btn-outline-danger" htmlFor="btnradio3">
                <i className="fa-solid fa-clipboard-list"></i>
            </label>
        </div>
    );
}

export default FilterStatus;