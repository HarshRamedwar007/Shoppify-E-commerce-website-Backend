function errorRoutes(err, req, res, next) {
    if (err.name === "MongoNetworkError") {
        return res.status(503).json({ message: "Network Error" });
    } else if (err.name === "ValidationError") {
        return res.status(400).json({ message: "Validation Error" });
    } else if (err.name === "CastError") {
        return res.status(400).json({ message: "Invalid Id provided" });
    }

    next(err);
}

export default errorRoutes;