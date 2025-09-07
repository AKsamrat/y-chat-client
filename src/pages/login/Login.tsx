import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import useUserLoginStore from "../../store/useLoginStore";
import useUserStore from "../../store/useUserStore.ts";
import countries from "../../utils/countries.ts";
import { avatars } from "../../utils/data.ts";

//validate schema
const loginValidationSchema = yup
  .object()
  .shape({
    phoneNumber: yup
      .string()
      .nullable()
      .notRequired()
      .matches(/^\d+$/, "Phone number must be digit")
      .transform((value, originalValue) => {
        return originalValue.trim() === "" ? null : value;
      }),
    email: yup
      .string()
      .nullable()
      .notRequired()
      .email("please enter valid email")
      .transform((value, originalValue) => {
        return originalValue.trim() === "" ? null : value;
      }),
  })
  .test(
    "at_least_one",
    "Either email or phone number is required",
    function (value) {
      return !!(value.phoneNumber || value.email);
    }
  );

const otpValidationSchema = yup.object().shape({
  otp: yup
    .string()
    .length(6, "otp must be exactly 6 digits")
    .required("otp is required"),
});

const profilevalidationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  agreed: yup.bool().oneOf([true], "You must agree to the tearms"),
});

const Login = () => {
  const { step, setStep, setUserPhoneData, userPhoneData, resetLoginState } =
    useUserLoginStore();
  const [phoenNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmut,
    formState: { errors: loginErrors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });
  const {
    handleSubmit: handleOtpSubmit,
    formState: { errors: otpError },
    setValue: setOtpValue,
  } = useForm({ resolver: yupResolver(otpValidationSchema) });
  const {
    register: profileRegister,
    handleSubmit: handleprofileSubmit,
    formState: { errors: profileError },
    watch,
  } = useForm({ resolver: yupResolver(profilevalidationSchema) });

  return <div></div>;
};

export default Login;
