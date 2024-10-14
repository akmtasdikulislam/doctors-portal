/* eslint-disable react/prop-types */
import {
  faCheckCircle,
  faExclamationCircle,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import FormStateCard from "../FormStateCard/FormStateCard";

const SignUpFormOverlay = ({ isProcessing, authStatus, setIsProcessing }) => {
  const navigate = useNavigate();
  return (
    <div className={`form-overlay ${isProcessing ? "d-block" : "d-none"}`}>
      {isProcessing && authStatus === null ? (
        <FormStateCard type="processing">
          <FontAwesomeIcon icon={faRotate} />
          <h6>
            <span>Processing!</span> Creating your account.
          </h6>
        </FormStateCard>
      ) : authStatus?.success ? (
        <FormStateCard type="success">
          <FontAwesomeIcon icon={faCheckCircle} />
          <h6>
            <span>Success!</span> {authStatus?.message}
          </h6>
          <button
            className="btn btn-secondary py-1 px-3"
            onClick={() => navigate("/login")}
          >
            Login to your account
          </button>
        </FormStateCard>
      ) : (
        <FormStateCard type="error">
          <FontAwesomeIcon icon={faExclamationCircle} />
          <h6>
            <span>Error!</span> {authStatus?.message}
          </h6>
          <button
            className="btn btn-secondary py-1 px-3"
            onClick={() => setIsProcessing(false)}
          >
            Try Again
          </button>
        </FormStateCard>
      )}
    </div>
  );
};

export default SignUpFormOverlay;
