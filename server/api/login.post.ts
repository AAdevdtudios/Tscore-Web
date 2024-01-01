export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const url = config.public.api + "auth/login/";
  const { email, password } = await readBody(event);
  const data = await $fetch(url, {
    method: "POST",
    body: {
      email: email,
      password: password,
    },
  }).catch((error) => {
    console.log(error);

    throw createError({
      statusCode: 400,
      message: error,
    });
  });

  return data;
});
