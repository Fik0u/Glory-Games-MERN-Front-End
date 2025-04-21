// We define here the action types as constants and export them in order to avoid making typos so that we can import them in our action creators and reducers.

export const LOAD_AUTH = 'LOAD_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const FAIL_AUTH = 'FAIL_AUTH';
export const CURRENT_AUTH = 'CURRENT_AUTH';
export const LOGOUT_AUTH = 'LOGOUT_AUTH';

// This is a constant to update the user profile picture
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';