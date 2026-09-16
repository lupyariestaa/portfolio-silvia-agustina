import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match semua path kecuali yang diawali dengan: api, _next, _vercel, atau file dengan ekstensi
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
