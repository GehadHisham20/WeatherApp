export function debounce(func: any, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
