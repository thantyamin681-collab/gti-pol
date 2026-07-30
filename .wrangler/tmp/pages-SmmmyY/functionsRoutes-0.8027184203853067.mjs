import { onRequestGet as __api_news_ts_onRequestGet } from "D:\\gti-website\\functions\\api\\news.ts"
import { onRequestPost as __api_news_ts_onRequestPost } from "D:\\gti-website\\functions\\api\\news.ts"

export const routes = [
    {
      routePath: "/api/news",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_news_ts_onRequestGet],
    },
  {
      routePath: "/api/news",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_news_ts_onRequestPost],
    },
  ]