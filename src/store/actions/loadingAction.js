export const setLoading = (isLoading) => {
  document.querySelector(".page").style.overflow = isLoading
    ? "scroll"
    : "hidden";
  return {type: "SET_LOADING", payLoad: {isLoading: isLoading}};
};
