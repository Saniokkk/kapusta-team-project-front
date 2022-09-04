const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.email;

const getToken = (state) => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getToken,
};

export default authSelectors;
