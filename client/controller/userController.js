const express = require('express');
const bcrypt = require('bcrypt');
const users = require("../Module/userModule");

const userController = {
    registerUser: async (req, res) => {
        try {
            const { full_name, email, password, conform_password, country_name, state_name, city_name, languages } = req.body;

            // const hashedPassword = await bcrypt.hash(password, 10);

            // Check if a user with the same email already exists
            const existingUser = await users.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already registered." });
            }

            // Create a new user
            const user = new users({
                full_name,
                email,
                password,
                conform_password,
                country_name,
                state_name,
                city_name,
                languages
            });

            await user.save();
            return res.status(201).json({
                message:"user Registered successfully",
                userDetails:user
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "User registration failed."
            });
        }
    },

    getallUser: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1; 
            const perPage = parseInt(req.query.perPage) || 10; 
    

            const skip = (page - 1) * perPage;
    

            const usersOnPage = await users
                .find()
                .skip(skip)
                .limit(perPage);

            const totalUsers = await users.countDocuments();
    
        
            const totalPages = Math.ceil(totalUsers / perPage);
    
            res.status(200).json({
                users: usersOnPage,
                currentPage: page,
                totalPages,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to fetch users."
            });
        }
    },
    

    getuserByid: async (req, res) => {
        try {   
            // const userId = req.params.id;
            // const userId = req.params.id;
            const userId = req.params.id;

            const user = await users.findById(userId)
            // const user = await users.findById(userId);

            if (!user) {
                return res.status(404).json({
                    message: "User not found."
                });
            }

            res.status(200).json(user);

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to fetch user."
            });
        }
    },

    updateuserByid: async (req, res) => {
        try {
           const userId = req.params.id;
           const updateUser = req.body;
           const user = await users.findByIdAndUpdate(userId,updateUser,{new :true})

            if (!user) {
                return res.status(404).json({
                    message: "User not found."
                });
            }

            res.status(200).json({
                message: "User updated successfully.",
                userDelete:user
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to update user."
            });
        }
    },

    deleteuserByid: async (req, res) => {
        try {
            const userId = req.params.body;
            const user = await users.findOneAndDelete(userId)

            if (!user) {
                return res.status(404).json({
                    message: "User not found."
                });
            }

            res.status(204).json({
                message:"user deleted successfully"
            })

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Failed to delete user."
            });
        }
    }
};

module.exports = userController;
