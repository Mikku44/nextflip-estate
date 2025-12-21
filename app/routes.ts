import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/condo-estimator","routes/condo-estimator.tsx"),
        route("/use-case","routes/use-case.tsx"),
        route("/condominium","routes/condominium.tsx"),
        route("/know-nextflip-estate","routes/know-nextflip-estate.tsx"),
        route("/blogs","routes/blogs.tsx"),
        route("/contact","routes/contact.tsx"),
    ]),

] satisfies RouteConfig;
