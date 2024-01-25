import { useAuth } from "@/stores/auth";
import { storeToRefs } from "pinia";
export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated, user, is_subscribed } = storeToRefs(useAuth());
  console.log(user);
  if (to.path == "/dashboard/subscription-page" && authenticated.value) {
    return true;
  }
  if (to.path == "/dashboard/profile" && authenticated.value) {
    return true;
  }
  if (to.path == "/dashboard" && is_subscribed.value) {
    return true;
  }

  return navigateTo("/login");
});
