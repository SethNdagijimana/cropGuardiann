import { SigninType, SignupType, updatePasswordType } from "@/utils/types"



export const signUp = async ({
  name,
  email,
  password,
  retypedPassword
}: SignupType) => {
  const response = await fetch(`/api/user/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, retypedPassword })
  })

  const result = await response.json()

  return result
}

export const generateVerificationEmail = async (
  email: string,
  isServer?: boolean
) => {
  let url = "/api/user/generate-verification-email"

  if (isServer) {
    url = process.env.APP_URL + "/api/user/generate-verification-email"
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email})
  })

  const result = await response.json()

  return result
}




export const logIn = async ({ email, password }: SigninType) => {
  const response = await fetch(process.env.APP_URL + `/api/user/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })

  const result = await response.json()

  return result
}

export const changePassword = async ({
  userId,
  currentPassword,
  newPassword,
  retypedNewPassword
}: updatePasswordType) => {
  const response = await fetch(`/api/user/change-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      currentPassword,
      newPassword,
      retypedNewPassword
    })
  })

  const result = await response.json()

  return result
}


export const resetPassword = async (email: string) => {
  const response = await fetch(`/api/user/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  })

  const result = await response.json()

  return result
}

export const generateResetPasswordEmail = async (
 
  email: string
) => {
  let url = process.env.APP_URL + "/api/user/generate-reset-password-email"

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  })

  const result = await response.json()

  return result
}



export const updatePassword = async ({
  userId,
  password,
  confirmPassword
}: {
  userId: string
  password: string
  confirmPassword: string
}) => {
  const response = await fetch(`/api/user/update-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, password, confirmPassword })
  })

  const result = await response.json()

  return result
}


export const getUser = async (userId: string) => {
  const response = await fetch(process.env.APP_URL + `/api/user/get`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId })
  })

  const result = await response.json()

  return result
}

export const getSupport = async (
  userName: string,
  userEmail: string,
  phoneNumber: string,
  location: string,
  userId: string,
  insurance: string,
  support: string,
  message: string
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/get-support`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName,
      userEmail,
      phoneNumber,
      location,
      userId,
      insurance,
      support,
      message
    })
  });
  
  const result = await response.json();
  return result;
};


export const getInsurance = async (name: string, email: string, contact: string, userId: string, insurance: string) => {
  console.log("Calling Insurance API with:", { name, email, contact, userId, insurance });
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/insurance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, contact, userId, insurance })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return { error: true, message: errorData.message || "An error occurred" };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: true, message: "insurance error"};
  }
};

// export const userFeedback = async (email: string, feedback: string) => {
//   console.log("Calling userFeedback API with:", { email, feedback });
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/feedback`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, feedback }),
//     });


//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error(`Error: ${response.status} - ${response.statusText}`);
//       return { error: true, message: errorData.message || "An error occurred" };
//     }

//     const result = await response.json();

//     return result;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return { error: true, message: "feedback error" };
//   }
// };


 export const userFeedback = async (email: string, feedback: string) => {
  console.log("Calling userFeedback API with:", {name, email, feedback });
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name, email, feedback }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return { error: true, message: errorData.message || "An error occurred" };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: true, message: "Feedback error" };
  }
};



