import VerificationStatus from "@/components/VerificationStatus/VerificationStatus";
import "./style.scss";
import Button from "@/components/UI/primitives/Button/Button";

const VerificationPage = () => {


    return (
      <div className="verification container-login">
          <div className='verification__inner'>
              <div className="verification__circle"></div>
              <div className='verification__heading'>
                Verification status
              </div>
              <div className="verification__text">
                <VerificationStatus />
              </div>
              <Button href="/generation" className="verification__button">Continue</Button>
          </div>
      </div>
    )
}

export default VerificationPage