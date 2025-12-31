import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/condo-estimator", "routes/condo-estimator.tsx"),
        route("/use-case", "routes/use-case.tsx"),
        route("/condominium", "routes/condominium.tsx"),
        route("/privacy", "routes/privacy.tsx"),
        route("/terms", "routes/terms.tsx"),
        route("/condominium/:slug", "routes/condominium-detail.tsx"),
        route("/know-nextflip-estate", "routes/know-nextflip-estate.tsx"),
        route("/blogs", "routes/blogs.tsx"),
        route("/blogs/:slug", "routes/blog-detail.tsx"),
        route("/contact", "routes/contact.tsx"),
    ],
    ),
    // admin
    route("/admin/assets/add", "routes/admin/assets/add.tsx"),


    // api
    route("/api/apply", "routes/api/apply.tsx")

] satisfies RouteConfig;
