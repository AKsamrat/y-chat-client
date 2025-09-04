/* eslint-disable @typescript-eslint/no-explicit-any */

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

export const updateUserProfile = async (updateData: string[] | string) => {
  try {
    const response = await axiosInstance.put(
      "/auth/update-profile",
      updateData
    );
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};
