import Get from "../di/get";

export default function wrapPromise<TVariables, TValue>(
  promiseFunc: (variables: TVariables) => Promise<TValue>,
  variables: TVariables,
  key: string
): () => TValue {
  const realKey = key + JSON.stringify(variables);

  const func = Get.tryFind<() => TValue>(realKey);
  if (func) return func;

  let data: TValue;
  let error: any;
  let status: "stable" | "pending" | "success" | "error" = "stable";
  let suspender: any;
  let suspenseCount = 0;

  const newFunc = (): TValue => {
    if (status === "stable") {
      suspender = promiseFunc(variables)
        .then((value) => {
          status = "success";
          data = value;
        })
        .catch((err) => {
          status = "error";
          error = err;
        });
      status = "pending";
      suspenseCount++;
      throw suspender;
    } else if (status === "success") {
      suspenseCount--;
      if (suspenseCount === 0) Get.delete(realKey);
      return data;
    } else if (status === "error") {
      suspenseCount--;
      throw error;
    } else {
      suspenseCount++;
      // pending
      throw suspender;
    }
  };

  Get.put<() => TValue>(realKey, newFunc);
  return newFunc;
}
