const { verifySignUp, replaceRoom, authJwt } = require('../middleware');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const simController = require('../controllers/simulation.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post(
    '/api/auth/signup',
    [verifySignUp.checkDuplicateUsernameOrEmail],
    authController.signup
  );

  app.post('/api/auth/signin', authController.signin);

  app.post(
    '/api/auth/workstation',
    [replaceRoom.replaceRoomInDataBase],
    authController.saveRoomData
  );

  app.post('/api/workstation', userController.userWorkstation);

  app.get(
    '/api/workstation',
    [authJwt.verifyToken],
    userController.userWorkstation
  );

  app.get('/api/workstation', userController.getMongoSimData);

  app.post('/api/auth/simulation', simController.simulation);
};
