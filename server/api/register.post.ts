export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const url = config.public.api + "auth/register/";
  const { first_name, last_name, email, password, confirm_password } =
    await readBody(event);
  try {
    const data = await $fetch(url, {
      method: "POST",
      body: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        password2: confirm_password,
      },
    });
    if (data == null) {
      throw createError({
        statusCode: 404,
        statusMessage: "User already exist",
      });
    }
    console.log(data);

    return {
      data,
    };
  } catch {
    return {
      message: "Failed to register",
    };
  }
});
