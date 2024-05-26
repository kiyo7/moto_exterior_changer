import motorcyclePropType from "../types/MotorCycle";
import PropTypes from "prop-types";

const CustomPartsModal = ({ custom, setAttachCustoms, attachCustoms }) => {
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {custom.length === 0 ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <div>
              <h3 className="font-bold text-lg">{custom.name}</h3>
              {custom.parts.map((parts) => (
                <div key={parts} className="card w-96 bg-base-100 shadow-xl">
                  <img src={parts} alt={parts} />
                  <input type="color" />

                  <div
                    className="card-body"
                    onClick={() => setAttachCustoms([...attachCustoms, parts])}
                    style={{ cursor: "pointer" }}
                  >
                    <h2 className="card-title">{custom.name}</h2>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default CustomPartsModal;

CustomPartsModal.propTypes = {
  custom: motorcyclePropType.isRequired,
  attachCustoms: PropTypes.array.isRequired,
  setAttachCustoms: PropTypes.func.isRequired,
};
