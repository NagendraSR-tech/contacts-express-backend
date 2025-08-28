const { constants } = require('../constants');
const errorHandler = (err, req, res, next) => {
    // const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: err.stack //stackTrace not shown in production
            });
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.INTERNAL_SERVER_ERROR:
            res.json({
                title: "Internal Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        default:
            console.log("No Error, All is well");
            break;
    }
    // res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
    // res.json({ title: "Validation failed", message: err.message, stackTrace: err.stack });

    // for small projects or MVPs(Minimum Viable Product)
    // res.status(statusCode).json({
    //     success: false,
    //     title: getErrorTitle(statusCode),
    //     error: err.message,
    // });
};

module.exports = errorHandler;
