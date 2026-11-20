import { Loader } from "lucide-react";
import React, { useState } from "react";
import styled from "styled-components";


// Props type
interface SendContactModalProps {
  setPdfModal: React.Dispatch<React.SetStateAction<boolean>>;
  detials?: {
    text?: string;
    link?: string;
    lebel?: string;
    icon?: React.ReactNode;
  };
}

const SendContactModal: React.FC<SendContactModalProps> = ({ setPdfModal, detials }) => {
  const [loader, setLoader] = useState<boolean>(false);

  const closeModal = () => {
    setPdfModal(false);
  };

  const download = () => {
    setTimeout(() => {
      if (detials?.link === "web") {
        window.location.reload();
      } else if (detials?.link) {
        const aTag = document.createElement("a");
        aTag.href = detials.link;
        aTag.target = "_blank"; // fixed typo __bank → _blank
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        setLoader(false);
        closeModal();
      }
    }, 1000);
  };

  return (
    <SendContactModalStyle>
      <div className="modal-container">
        <div className="modal-container2">
          <p className="para-download">{detials?.text}</p>
          <div className="btn-yes-no">
            {loader ? (
              <Loader />
            ) : (
              <>
                <button className="downloadbtn-no" onClick={closeModal}>
                  No
                </button>
                <button
                  className="downloadbtn"
                  onClick={() => {
                    download();
                    setLoader(true);
                  }}
                >
                  Yes
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </SendContactModalStyle>
  );
};

export default SendContactModal;

const SendContactModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .modal-container {
    background-color: #fff;
    width: 360px;
    max-width: 95vw;
    border-radius: 16px;
    padding: 35px 30px 40px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    position: relative;
    animation: fadeInScale 0.4s ease forwards;
  }

  @keyframes fadeInScale {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .para-download {
    margin: 0 0 40px;
    font-size: 22px;
    font-weight: 700;
    color: #333;
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 1.3;
    user-select: none;
  }

  .btn-yes-no {
    display: flex;
    justify-content: center;
    gap: 24px;
  }

  button {
    min-width: 120px;
    height: 50px;
    border-radius: 28px;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    user-select: none;
  }

  .downloadbtn {
    background-color:#1c1c1e;
    border: 2.5px solid 1c1c1e;
    color: #fff;

    &:hover {
      background-color: #027532ff;
      color: 1c1c1e;
      box-shadow: 0 0 16px 1c1c1e99;
      border-color: 1c1c1e;
    }
  }

  .downloadbtn-no {
    background-color: #e03d3d;
    border: 2.5px solid #e03d3d;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #e03d3d;
      box-shadow: 0 0 16px #e03d3d99;
      border-color: #e03d3d;
    }
  }
`;
