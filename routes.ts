/** 
*  An array of routes that are accessible to the public
* These routes do not require authentication
* @type {string[]}
*/

export const publicRoutes = [
    "/"
];


/** 
*  An array of routes that are used for authentication
* These routes will redirect logged in users to the /settings page
* @type {string[]}
*/

export const authRoutes = [
    "/auth/login",
    "/auth/register",
]


/** 
*  The prefix for api authentication routes
*  Routes that start with this prefixes are used for authentication
* @type {string}
*/
export const apiAuthPrefix ="/api/auth";


/** 
*  The default redirect path after logging in
* @type {string}
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings";