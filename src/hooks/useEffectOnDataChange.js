import React, {useEffect} from "react";

const useEffectOnDataChange = (callback, dataArr) => {
  const someIsNull = dataArr.some((data) => data == null);

  useEffect(() => {
    if (someIsNull) return;
    return callback();
  }, dataArr);
};
export default useEffectOnDataChange;
