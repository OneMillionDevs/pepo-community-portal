const devEnvironment = {
  FIREBASE_CONFIG: {}
};
const prdEnvironment = {
  FIREBASE_CONFIG: {}
};

if (process.env.NODE_ENV === "production") {
  module.exports = prdEnvironment;
} else {
  module.exports = devEnvironment;
}
