import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utils/generateToken.js";
// Register a new company
export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  // pass the form data
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({
      success: false,
      message: "Missing Details",
    });
  }

  try {
    const companyExits = await Company.findOne({ email });
    if (companyExits) {
      return res.json({
        success: false,
        message: "Company already registered",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path);
    const company = await Company.create({
      name,
      email,
      password: hashPassword,
      image: imageUpload.secure_url,
    });
    res.json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Company login
export const loginCompany = async (req, res) => {
  const { email, password } = req.body;
  try {
    const company = await Company.findOne({ email });

    if (bcrypt.compare(password, company.password)) {
      res.json({
        success: true,
        company: {
          _id: company._id,
          name: company.name,
          email: company.email,
          image: company.image,
        },
        token:generateToken(company._id)
      });
    }
    else {
        res.json({
            success:false,
            message:"Invalid email or password"
        })
    }

  } catch (error) {
    res.json({
        success:false,
        message:error.message
    })
  }
};

// Get company data
export const getCompanyData = async (req, res) => {};

// post as new job
export const postJob = async (req, res) => {};

// get company job applicants
export const getCompanyJobApplicants = async (req, res) => {};

// get company posted jobs
export const getCompanyPostedJobs = async (req, res) => {};

// change job applications status
export const changeJobApplicationStatus = async (req, res) => {};
// change job visibility
export const changeVisibility = async (req, res) => {};
