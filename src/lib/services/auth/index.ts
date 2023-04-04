// import { Auth } from "aws-amplify";

// export const AWSConfigs = {
//   aws_cognito_region: process.env.NEXT_PUBLIC_AWS_REGION,
//   aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
//   aws_user_pools_web_client_id: process.env.NEXT_PUBLIC_AWS_APP_CLIENT_ID,
// };

// Auth.configure({
//   ...AWSConfigs,
//   ssr: true
// })


// export const signIn = async (email: string, password: string) => {
//   try {
//     const user = await Auth.signIn(email, password);
//     return user;
//   } catch (error) {
//     return error;
//   }
// }

// export const signOut = async () => {
//   try {
//     await Auth.signOut();
//   } catch (error) {
//     console.log("error signing out: ", error);
//   }
// }

// export const signUp = async (email: string, password: string) => {
//   try {
//     const user = await Auth.signUp({
//       username: email,
//       password,
//       attributes: {
//         email,
//       },
//     });
//     return user;
//   } catch (error) {
//     return error;
//   }
// }

// export const checkUserAuth = async () => {
//   try {
//     const user = await Auth.currentAuthenticatedUser();
//     return user;
//   } catch (error) {
//     return error;
//   }
// }

// export const resetPassword = async (email: string) => {
//   try {
//     const user = await Auth.forgotPassword(email);
//     return user;
//   } catch (error) {
//     return error;
//   }
// }

// export const confirmResetPassword = async (
//   email: string,
//   code: string,
//   password: string,
//   confirmPassword: string
// ) => {
//   if (password !== confirmPassword) {
//     return "Passwords do not match";
//   }
//   try {
//     const user = await Auth.forgotPasswordSubmit(email, code, password);
//     return user;
//   } catch (error) {
//     return error;
//   }
// }

export const example = ''