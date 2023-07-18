import PropTypes from 'prop-types';
import style from './Search.module.css';

const Search = ({ onSubmit }) => {
  let queryValue = '';

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    queryValue = form.elements.query.value;
    onSubmit(queryValue);
    form.reset();
  };

  return (
    <div>
      <form className={style.searchForm} action="" onSubmit={handleSubmit}>
        <input placeholder='Search...' className={style.formInput} type="text" name="query" defaultValue={queryValue} />
        <button className={style.searchBtn} type="submit">Search</button>
      </form>
    </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
