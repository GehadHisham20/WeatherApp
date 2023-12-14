export function debounce(func: any, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: void, ...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
