import { useState } from "react";
import motorcyclePropType from "../types/MotorCycle";
import CustomPartsModal from "./CustomPartsModal";
import PropTypes from "prop-types";

const Card = ({ MotorcycleList, attachCustoms, setAttachCustoms }) => {
  const [selectCustom, setSelectCustom] = useState([]);
  return (
    <>
      <div className="flex flex-wrap">
        {MotorcycleList.custom_parts.map((custom) => (
          <>
            <div
              key={custom.name}
              className="card card-compact w-72 m-1 bg-base-100 shadow-xl"
            >
              <div className="w-80 h-28">
                <img
                  src={custom.image}
                  alt={custom.name}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">{custom.name}</h2>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      document.getElementById("my_modal_1").showModal();
                      setSelectCustom(custom);
                    }}
                  >
                    Attach
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <CustomPartsModal
        custom={selectCustom}
        attachCustoms={attachCustoms}
        setAttachCustoms={setAttachCustoms}
      />
    </>
  );
};

export default Card;

Card.propTypes = {
  MotorcycleList: motorcyclePropType.isRequired,
  attachCustoms: PropTypes.array.isRequired,
  setAttachCustoms: PropTypes.func.isRequired,
};
