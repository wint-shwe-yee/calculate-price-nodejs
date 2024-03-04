export const errorHandler = (err, req, res, next) => {
  if (err.message.includes("is not available in the menu.")) {
    res.status(400);
    res.json({ error : err.message });
  } else {
    res.status(500);
    res.json({ error : err.message });
  }
}