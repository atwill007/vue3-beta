export const delay = function(timeout, isResolve = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(timeout) : reject(timeout);
    }, timeout);
  });
};
