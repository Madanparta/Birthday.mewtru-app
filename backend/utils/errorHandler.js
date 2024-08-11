export const errorHandler = ({ statusCode, message }) => {
  const err = new Error();
  err.statusCode = statusCode;
  err.message = message;
  return err;
};

export function generateNextCount(currentCount) {

  const countNumber = parseInt(currentCount, 10);

  const newCountNumber = countNumber + 1;

  const newCountString = String(newCountNumber).padStart(4, "0");

  return newCountString;
}
