const initialValue = {
  type: "default",
  active: false,
  content: null,
  onSummit: null
};

const useModal = (setState) => {
  const changeModalState = (newState) => {
    setState(() => {
      return { ...initialValue, ...newState };
    });
  };

  const openModal = () => {
    setState((prev) => {
      return { ...prev, active: true };
    });
  };

  const closeModal = () => {
    setState((prev) => {
      return { ...prev, active: false };
    });
  };

  return { changeModalState, openModal, closeModal };
};

export default useModal;
