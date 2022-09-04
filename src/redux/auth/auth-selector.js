const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.email;

const getUserBalance = (state) => state.auth.user.totalBalance;

const getUserAvatar = (state) => state.auth.user.avatarURL;

const getToken = (state) => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getToken,
  getUserBalance,
  getUserAvatar,
};

export default authSelectors;
