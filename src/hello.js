module.exports.handler = (event, context, callback) => {
  console.log(event);
  return callback(null, { hello: "world" });
};
