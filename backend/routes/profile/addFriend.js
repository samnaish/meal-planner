const database = require('../../services/database');
const authentication = require('../../services/authentication');
const UserSchema = require('../../schemas/user');

module.exports = async (req, res) => {
  const sessionToken = req.headers['x-sessiontoken'];
  const { id } = req.body;

  try {
    const session = await authentication.decodeToken(sessionToken);
    if (!session) {
      return res.status(400).json({
        error: 'Please authenticate.'
      });
    }

    const connection = await database.connect();
    const User = database.loadModel(connection, 'User', UserSchema);

    const foundUser = await User.findOne({
      _id: session.user._id
    }, { friends: 1 });

    if (!foundUser) {
      return res.status(400).json({
        error: "no user found"
      });
    }

    const { friends = [] } = foundUser;
    const uniqueFriends = new Set(friends);
    uniqueFriends.add(id);

    await User.update({ _id: session.user._id }, { $set: { friends: Array.from(uniqueFriends) } });
    return res.status(200).json();

  } catch (error) {
    console.log('============');
    console.log('error in add Friend API', error);
    console.log('============');
    return res.status(500).json({
      error: "unexpected error, try again later."
    });
  }

}
