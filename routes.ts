/**
 * An Array of routes that accessible to the public
 * These routes do not require authentication
 * @type{string[]}
 */

export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An Array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type{string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
];

/**
 * The Prefix for API Authentication Routes
 * These routes will are used for API authentication purposes
 * @type{string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type{string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
