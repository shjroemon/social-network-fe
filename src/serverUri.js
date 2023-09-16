export default process.env.NODE_ENV === "development"
  ? "http://localhost:5000"
  : process.env.SERVER_URI;
