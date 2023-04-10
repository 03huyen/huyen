import User from "../models/user";
import { signupSchema, signinSchema } from "../schemas/auth";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        //validate 
        const { error } = signupSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }


        const unserExist = await User.findOne({ email: req.body.email });
        console.log("🚀 ~ file: auth.js:19 ~ signup ~ unserExist:", unserExist)
        if (unserExist) {
            return res.status(400).json({
                message: "Email da ton tai",
            });
        }

        //ma hoa mat khau
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: user._id }, "nguyenthihuyen", { expiresIn: "1d" });
        user.password = undefined;
        return res.status(201).json({
            message: "Tao tai khoan thanh cong",
            accessToken: token,
            user,
        });
    } catch (error) {
        return res.status(500).json({
            message: " unauthorized"
        })
    }
};


export const signin = async (req, res) => {

    try {
        const { email, password } = req.body;
        const { error } = signinSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Email khong ton tai",
            });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Sai mk",
            });
        }

        const token = jwt.sign({ _id: user._id }, "nguyenthihuyen", { expiresIn: "1d" });
        //user.password = undefined;
        return res.status(201).json({
            message: "Dang nhap thanh cong",
            accessToken: token,
            user,
        })

    } catch (error) {
        console.log(error);
    }
};