/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ApiResponse, UpdateProfileData } from "../types";
import axiosInstance from "./url.service";

//send otp-------

export const sendOtp = async (
  phoneNumber: string,
  phoneSuffix: string,
  email: string
): Promise<any> => {
  try {
    const response = await axiosInstance.post("/auth/send-otp", {
      phoneNumber,
      phoneSuffix,
      email,
    });
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

//verify Otp----------------

export const verifyOtp = async (
  phoneNumber: string,
  phoneSuffix: string,
  otp: string,
  email: string
) => {
  try {
    const response = await axiosInstance.post("/auth/verify-otp", {
      phoneNumber,
      phoneSuffix,
      email,
      otp,
    });
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

//update user profile-------

export const updateUserProfile = async (
  updateData: UpdateProfileData
): Promise<ApiResponse<UpdateProfileData>> => {
  try {
    const response = await axiosInstance.put<ApiResponse<UpdateProfileData>>(
      "/auth/update-profile",
      updateData
    );
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

//check user auth---------

export const checkUserAuth = async () => {
  try {
    const response = await axiosInstance.get("/auth/check-Auth");
    if (response.data.status === "success") {
      return { isAuthenticated: true, user: response?.data?.data };
    } else if (response.data.status === "error") {
      return { isAuthenticated: true };
    }
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

//logout  user

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.get("/auth/logout");
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

//get all  user

export const getAllUser = async () => {
  try {
    const response = await axiosInstance.get("/auth/users");
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};
