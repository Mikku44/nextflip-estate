import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/condominium","routes/condominium.tsx"),
        route("/know-nextflip-estate","routes/know-nextflip-estate.tsx"),
        route("/blogs","routes/blogs.tsx"),
        route("/contact","routes/contact.tsx"),
    ]),

] satisfies RouteConfig;
