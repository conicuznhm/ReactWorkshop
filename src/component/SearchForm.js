import { useEffect, useState } from "react";

const SearchForm = ({ onChange, trigger }) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        onChange(search);
    }, [trigger])

    const handleChange = (e) => {
        const currentSearch = e.target.value.trim();
        // onChange(currentSearch);
        setSearch(currentSearch);
    }

    useEffect(() => {
        let debounceTime;
        if (search !== '') {
            debounceTime = setTimeout(() => {
                onChange(search);
            }, 1000);
        } else {
            onChange('');
        }
        return (() => {
            clearTimeout(debounceTime);
        })
    }, [search])

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