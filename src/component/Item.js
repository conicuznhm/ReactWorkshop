const Item = ({item}) => {
    return (
        <div className="input-group">
            <input type='text' className="form-control" />
            <button className="btn btn-outline-secondary" >Add</button>
            <button type="reset" className="btn btn-outline-secondary" >Reset</button>
        </div>

    );
}
export default Item;