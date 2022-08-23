export const loadStates = () => {
  const inkstates = localStorage.getItem('INK') || '{}';
  return JSON.parse(inkstates);
};

export const setStates = (props: any) => {
  localStorage.setItem('INK', JSON.stringify(props));
};
