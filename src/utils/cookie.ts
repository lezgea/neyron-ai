import Cookies from 'js-cookie';

const accessTokenName = 'token';

export const getAccessToken = () => Cookies.get(accessTokenName);

export function removeAuthCookies() {
  Cookies.remove(accessTokenName, { path: '/login' });
}

export const setAuthCookies = (accessToken: string) => {
  Cookies.set(accessTokenName, accessToken, {
    expires: 7,
    sameSite: 'none',
    secure: true,
  });
};
