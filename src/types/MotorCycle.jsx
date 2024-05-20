import PropTypes from "prop-types";

const motorcyclePropType = PropTypes.shape({
  custom_parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      parts: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
});

export default motorcyclePropType;
