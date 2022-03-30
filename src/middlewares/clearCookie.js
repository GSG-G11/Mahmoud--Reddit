module.exports = async (req, res) => {
  try {
    res.clearCookie("token", { path: "/" });
    res.status(200).json({ message: "log out success" });
  } catch (err) {
    res.status(401).json({ status: "error", message: err });
  }
};
