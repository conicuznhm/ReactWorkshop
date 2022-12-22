import { useState } from "react";

const Item = ({ item, completed, id, onClick }) => {
    const [isDone, setIsDone] = useState(completed);

    const handleIsDone = () => setIsDone(!isDone);

    return (
        <div className="input-group">
            <div className="form-control" style={{ backgroundColor: isDone ? '#14A44D' : '#DC4C64' }}>{item}</div>
            <button className="btn btn-outline-secondary" onClick={handleIsDone} >Done</button>
            <button type="reset" className="btn btn-outline-secondary" onClick={() => onClick(id)} >Delete</button>
        </div>
    );
}
export default Item;