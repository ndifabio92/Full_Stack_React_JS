const { Router } = require("express");
const { check } = require('express-validator');
const { validateJWT } = require("../middleware");
const { emailExist, existUserId } = require("../helpers/db-validators");
const { getUser, postUser, putUser, delUser, getUsers } = require("../controllers/users");

const router = Router();

router.get("/", getUsers);
router.get('/:id', getUser );

router.post('/', [
	check('email').custom( emailExist )
], postUser);

router.put('/:id', [
	check('id').custom( existUserId )
], putUser);

router.delete('/:id', [
	validateJWT,
	check('id').custom( existUserId )
], delUser);

module.exports = router;
