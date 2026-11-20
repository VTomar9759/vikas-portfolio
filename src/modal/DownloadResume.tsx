import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import styled from "styled-components";
import resumeFile from "../resume.pdf";

interface DownloadPdfProps {
  setPdfModal: (value: boolean) => void;
}

const url =resumeFile; // Served from public folder

const DownloadPdf: React.FC<DownloadPdfProps> = ({ setPdfModal }) => {
  const [loader, setLoader] = useState(false);

  const closeModal = () => {
    setPdfModal(false);
  };

  const download = () => {
    setLoader(true);

    setTimeout(() => {
      const fileName = url.split("/").pop() ?? "resume.pdf";

      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.target = "_blank";
      aTag.download = fileName; // ✅ Type-safe way in TS
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();

      setLoader(false);
      closeModal();
    }, 1000);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <h3>Resume</h3>
        <Prompt>Are you sure you want to download the CV?</Prompt>
        <ButtonGroup>
          {loader ? (
            <Loader2 />
          ) : (
            <>
              <NoButton onClick={closeModal}>No</NoButton>
              <YesButton onClick={download}>Yes</YesButton>
            </>
          )}
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DownloadPdf;

// Styled Components

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 360px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 20px 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeIn 0.4s ease, scaleIn 0.4s ease;

  @media (max-width: 480px) {
    width: 90%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 24px;
  color: #000000;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #1c1c1e;
    transform: scale(1.1);
  }
`;

const Prompt = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
`;

const YesButton = styled.button`
  width: 100px;
  background-color: #1c1c1e;
  color: white;
  border: none;
  padding: 12px 26px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #1c1c1e;
    box-shadow: 0 0 16px #1c1c1e99;
    border-color: #1c1c1e;
  }
`;

const NoButton = styled.button`
  width: 100px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 12px 26px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #e03d3d;
    box-shadow: 0 0 16px #e03d3d99;
    border-color: #e03d3d;
  }
`;
