import dotenv from "dotenv";
dotenv.config();

import express from "express";  
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";

connectDB()