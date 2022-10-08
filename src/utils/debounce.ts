const debounce = (func: () => void, delay: number) => {
  let timer: NodeJS.Timeout;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

export default debounce;
