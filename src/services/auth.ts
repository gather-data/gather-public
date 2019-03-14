export const isBrowser = () => typeof window !== 'undefined';

export const getSession = () => {
  if (!isBrowser()) {
    return null;
  }

  const session = localStorage.getItem('session');

  if (!session) {
    return null;
  }

  return JSON.parse(session);
};

export const isLoggedIn = () => {
  if (!isBrowser()) {
    return false;
  }

  return Boolean(getSession());
};
