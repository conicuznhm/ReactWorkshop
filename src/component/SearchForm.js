import { useState } from "react";

const SearchForm = ({onChange}) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        const currentSearch = e.target.value.trim();
        onChange(currentSearch);
        setSearch(e.target.value);
    }

    const handleCancel = () => {
        onChange('');
        setSearch('');
    }

    return (
        <div className="input-group">
            <input
                className={`form-control`}
                value={search} onChange={handleChange}
                placeholder='Search'
            />

            <button className="btn btn-warning" onClick={handleCancel}>
                <i className="fa-solid fa-xmark" />
            </button>
        </div>
    );
}

export default SearchForm;