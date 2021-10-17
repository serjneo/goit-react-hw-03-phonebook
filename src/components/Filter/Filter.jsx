import s from './Filter.module.css';

function Filter({ value, onChange }) {
    return (
        <input className={s.input} type="text" name="filter" onChange={onChange} value={value}
        placeholder="search contact"></input>
    )
}

export default Filter;