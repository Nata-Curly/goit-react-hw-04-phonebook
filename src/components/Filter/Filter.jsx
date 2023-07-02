import { FilterInput, FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return ( 
        <FilterLabel>
          Find contact by name <FilterInput type="text" value={value} onChange={onChange}/>
        </FilterLabel>
     );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Filter;