import { useEffect } from "react";

const CarModal = ({ onCloseModal, modalData }) => {
  const onOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const onEscClick = (event) => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };
    window.addEventListener("keydown", onEscClick);
    return () => {
      window.removeEventListener("keydown", onEscClick);
    };
  }, [onCloseModal]);
  // console.log(modalData);
  return (
    <div className="overlay" onClick={onOverlayClick}>
      <div className="modal">{modalData}</div>
    </div>
  );
};

export default CarModal;
