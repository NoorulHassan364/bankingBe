const User = require("../../models/user");

class Auth {
  signup = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      // console.log(user);
      if (user) {
        return res.status(400).json({
          status: "error",
          message: "email already exist!",
        });
      }


      const data = await User.create(req.body);

      res.status(201).json({
        status: "success",
        message: "signup successfully!",
        data: data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  };

  login = async (req, res) => {
    try {
      let { email, password } = req.body;

      const response = await User.findOne({ email });

      if (response) {
        return res.status(200).json({
          status: "success",
          data: response,
          message: "login Successfully!",
        });
      } else {
        return res.status(403).json({
          status: "error",
          message: "Invalid credentials",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  };

  AllUsers = async (req, res) => {
    try {
      const response = await User.find();
      return res.status(200).json({
        status: "success",
        data: response,
        // message: "login Successfully!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  };

  depositTransaction = async (req, res) => {
    try {
      const resUser = await User.findById(req.body.userId);
      const response = await User.findByIdAndUpdate(req.body.userId, { accBalance: parseInt(resUser.accBalance) + parseInt(req.body.depositAmount) });
      return res.status(200).json({
        status: "success",
        data: response,
        message: "deposit Successfully!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  };

  withdrawTransaction = async (req, res) => {
    try {
      const resUser = await User.findById(req.body.userId);
      const response = await User.findByIdAndUpdate(req.body.userId, { accBalance: parseInt(resUser.accBalance) - parseInt(req.body.withdrawAmount) });
      return res.status(200).json({
        status: "success",
        data: response,
        message: "withdraw Successfully!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  };

  getUser = async (req, res) => {
    try {
      const resUser = await User.findById(req.params.id);
      return res.status(200).json({
        status: "success",
        data: resUser,
        // message: "deposit Successfully!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  };
}

module.exports = new Auth();
