/* eslint-disable react/prop-types */
const FormStateCard = ({ type, children }) => {
  return (
    <div
      className={`state ${type}-state d-flex flex-column align-items-center justify-content-center gap-2 p-5`}
    >
      <div className="icon-circle d-flex align-items-center justify-content-center">
        {children[0]}
      </div>
      {children[1]}
      {children[2] && children[2]}
    </div>
  );
};

export default FormStateCard;
