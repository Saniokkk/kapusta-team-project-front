const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.email;

const getUserBalance = (state) => state.auth.user.totalBalance;

const getToken = (state) => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getToken,
  getUserBalance,
};

export default authSelectors;
