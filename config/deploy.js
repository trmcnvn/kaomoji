module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'kaomoji',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
