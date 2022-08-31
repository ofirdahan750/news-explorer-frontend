export const setLoading = (isLoading) => {
  document.querySelector(".page").style.overflow = isLoading
    ? "hidden"
    : "unset";
  return {type: "SET_LOADING", payLoad: {isLoading: isLoading}};
};
