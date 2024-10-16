const HandleError = (res, err) => {
  if (err.name === "ValidationError") {
    // Extract validation errors from Mongoose error object
    const validationErrors = Object.values(err.errors).map(
      (error) => error.message
    );
    return res.status(400).json({ errors: validationErrors });
  }
  console.log(err);
  return res.status(500).json({ message: "Server Error" });
};

export default HandleError;
