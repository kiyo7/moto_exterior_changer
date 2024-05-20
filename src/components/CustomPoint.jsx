import PropTypes from "prop-types";

const CustomPoint = (props) => {
  const { top, left } = props;
  return (
    <span
      onClick={() => {
        alert("");
      }}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        color: "yellow",
        top: top,
        left: left,
        position: "absolute",
        zIndex: 999,
        cursor: "pointer",
      }}
    >
      ●
    </span>
  );
};

export default CustomPoint;

CustomPoint.propTypes = {
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};

// 未使用　カスタム箇所の上に●があってそれをクリックしてパーツ変えるイメージ　ボツ案
