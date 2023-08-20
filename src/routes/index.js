import Router from 'next/router';

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const NextRouterWrapper = ({
  pathName,
  as,
  options = {},
  replace = false,
  reload = false,
}) => {
  if (replace) {
    Router.replace(
      pathName,
      `${BASE_PATH}${as || pathName}`,
      options,
    );
  } else {
    Router.push(pathName, `${BASE_PATH}${as || pathName}`, options);
  }
  if (reload) {
    // delay the reload to wait for Router.replace or Router.push to be executed.
    setTimeout(() => {
      Router.reload()
    }, 1000);
  }
};

export const getBasePath = (route) => `${BASE_PATH}${route}`;
