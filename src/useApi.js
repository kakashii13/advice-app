const useApi = async () => {
  const API = "https://api.adviceslip.com/advice";
  const response = await fetch(API);
  const data = await response.json();
  const ID = data.slip.id;
  const ADVICE = data.slip.advice;
  return {
    ID,
    ADVICE,
  };
};

export { useApi };
