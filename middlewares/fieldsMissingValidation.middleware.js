import fieldRequirements from "../config/fieldRequirements.js";

// Middleware to validate whether all fields are present or not
function fieldsMissingValidation(req, res, next) {
    // Get the required fields for the current path
    const requiredFields = getRequiredFields(req.baseUrl + req.path);

    // If no required fields are found, move ahead in the middleware chain
    if (!requiredFields) {
        return next();
    }

    // Get the fields received in the request body
    const recievedFields = req.body || {};

    // Find the missing fields
    const missingFields = requiredFields.filter(field => !recievedFields[field]);

    // Handle missing fields for POST and PUT requests
    if (req.method === "POST" && missingFields.length > 0) {
        return res.status(400).json({ message: `Required fields (${missingFields.join(", ")}) are missing !` });
    } else if (req.method === "PUT" && missingFields.length === requiredFields.length) {
        return res.status(400).json({ message: `Required fields (${missingFields.join(", ")}) are missing ! Atleast one field is required.` });
    }

    next();
}

// Function to get the required fields for a given path
function getRequiredFields(path) {
    for (const [routePath, fields] of Object.entries(fieldRequirements)) {
        if (checkRoutePathIsMatchingToPath(routePath, path)) {
            return fields;
        }
    }

    return null;
}

// Function to check if a route path matches a given path
function checkRoutePathIsMatchingToPath(routePath, path) {
    const routePathSegments = routePath.split("/").filter(segment => Boolean(segment));
    const pathSegments = path.split("/").filter(segment => Boolean(segment));

    if (routePathSegments.length !== pathSegments.length) {
        return false;
    }

    for (let i = 0; i < routePathSegments.length; i++) {
        if (routePathSegments[i].startsWith(":")) {
            continue;
        }

        if (routePathSegments[i] !== pathSegments[i]) {
            return false;
        }
    }

    return true;
}

export default fieldsMissingValidation;