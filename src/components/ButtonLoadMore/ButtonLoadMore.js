import PropTypes from 'prop-types';

import s from './ButtonLoadMore.module.css';

function ButtonLoadMore({ onLoadMore }) {
  return (
    <button className={s.Button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
}

ButtonLoadMore.protoType = {
  onLoadMore: PropTypes.func,
};

export default ButtonLoadMore;
