const { router } = require("../../utils/packages");

const { loginController } = require("../controllers");
// console.log(loginController);

router.post("/login", loginController);

module.exports = router;