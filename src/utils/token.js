const TokenKey = 'Token';

export function getToken() {
  return ls.get(TokenKey);
}

export function setToken(token) {
  return ls.set(TokenKey, token);
}

export function removeToken() {
  return ls.rm(TokenKey);
}
