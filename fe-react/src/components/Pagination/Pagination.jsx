import PropTypes from "prop-types";
import { pageModifier } from "../../store/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";
import "./Pagination";

const IndexPagination = ({ numberPages }) => {
  const page = useSelector((props) => props.page);
  const dispatcher = useDispatch();
  return (
    <span className="index-pagination">
      {Array.from({ length: numberPages }, (_, i) => (
        <button
          disabled={page - 1 === i}
          className={`basic-letter ${page ? "selected" : null}`}
          key={i}
          onClick={() => {
            pageModifier(i + 1)(dispatcher);
          }}
        >
          {i + 1}
        </button>
      ))}
    </span>
  );
};

const Pagination = ({ quantityPages }) => {
  return (
    <div className="pagination">
      <IndexPagination numberPages={quantityPages}></IndexPagination>
    </div>
  );
};

Pagination.propTypes = {
  quantityPages: PropTypes.number,
};

export default Pagination;
