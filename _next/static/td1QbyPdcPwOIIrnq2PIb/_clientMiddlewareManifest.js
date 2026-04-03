self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/slamacare(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next\\/static|_next\\/image|favicon.ico|public|products|.*\\.svg|.*\\.png|.*\\.jpg).*))(\\.json)?[\\/#\\?]?$",
    "originalSource": "/((?!api|_next/static|_next/image|favicon.ico|public|products|.*\\.svg|.*\\.png|.*\\.jpg).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()