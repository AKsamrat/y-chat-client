import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserLoginState {
  step: number;
  userPhoneData: string | null;
  setStep: (step: number) => void;
  setUserPhoneData: (data: string | null) => void;
  resetLoginState: () => void;
}

const useUserLoginStore = create<UserLoginState>()(
  persist(
    (set) => ({
      step: 1,
      userPhoneData: null,
      setStep: (step) => set({ step }),
      setUserPhoneData: (data) => set({ userPhoneData: data }),
      resetLoginState: () => set({ step: 1, userPhoneData: null }),
    }),
    {
      name: "login-storage",
      partialize: (state) => ({
        step: state.step,
        userPhoneData: state.userPhoneData,
      }),
    }
  )
);

export default useUserLoginStore;
