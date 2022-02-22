const cookie = {
  get(name) {
    return document.cookie
      .split("; ")
      .find((element) => element.includes(name));
  },

  set(name, value, expiredays) {
    document.cookie = `${name}=${value}; expires=${expiredays.toUTCString()}`;
  },
};

export default cookie;
