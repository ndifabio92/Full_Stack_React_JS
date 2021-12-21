"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    (user) ? res.json(user) : res.status(404).json({
        msg: `No exite el usuario con el id ${id}`
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = new user_1.default(body);
        const isExistUser = yield user_1.default.findOne({
            where: {
                name: body.name
            }
        });
        if (isExistUser)
            return res.status(400).json({
                msg: 'Ya existe un usuario'
            });
        yield user.save();
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
    ;
    res.json({
        msg: 'postUsuers',
        body,
    });
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const userUpdate = yield user_1.default.findByPk(id);
        if (!userUpdate)
            return res.status(404).json({
                msg: 'No existe el usuario para modificar '
            });
        yield userUpdate.update(body);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
    ;
    res.json({
        msg: 'putUsuers',
        id,
        body,
    });
});
exports.putUser = putUser;
const delUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userDel = yield user_1.default.findByPk(id);
    yield (userDel === null || userDel === void 0 ? void 0 : userDel.update({ status: false }));
    res.json({
        msg: 'deleteUser',
        id,
    });
});
exports.delUser = delUser;
//# sourceMappingURL=users.js.map