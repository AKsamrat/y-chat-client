export interface UpdateProfileData {
  name?: string;
  email?: string;
  phone?: string;
}
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
