import PropTypes from 'prop-types';

function LargeImage({ url }) {
  return <img src={url} alt="Large sample" />;
}

LargeImage.protoType = {
  url: PropTypes.string,
};

export default LargeImage;
