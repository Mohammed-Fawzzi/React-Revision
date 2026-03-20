import React, { Suspense } from "react";
// import page from "@/components/page";
// import Parent from "@/components/cruds/Parent";
// import ComponentLifeCycle from "@/components/ComponentLifeCycle/ComponentLifeCycle";
// import UseReducerHook from "@/components/hooks/UseReduce/UseReducerHook";
// import UseCallBackHook from "@/components/hooks/UseCallBack/UseCallBackHook";
// import UseMemoHook from "@/components/hooks/UseMemo/UseMemoHook";
import UseRefHook from "@/components/hooks/UseRef/UseRefHook";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const Layout = React.lazy(() => import("@/components/routing/Layout"));
  const Home = React.lazy(() => import("@/components/routing/Home"));
  // Nested Routes
  const About = React.lazy(() => import("@/components/routing/nested/About"));
  const UiUx = React.lazy(() => import("@/components/routing/nested/UiUx"));
  const Web = React.lazy(() => import("@/components/routing/nested/Web"));
  const Flutter = React.lazy(
    () => import("@/components/routing/nested/Flutter"),
  );

  const Gallery = React.lazy(() => import("@/components/routing/Gallery"));
  const Contact = React.lazy(() => import("@/components/routing/Contact"));

  // const appRoutes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       { index: true, element: <Home /> },
  //       {
  //         path: "about",
  //         element: <About />,
  //         children: [
  //           { index: true, element: <UiUx /> },
  //           { path: "web", element: <Web /> },
  //           { path: "flutter", element: <Flutter /> },
  //         ],
  //       },
  //       { path: "gallery", element: <Gallery /> },
  //       { path: "contact", element: <Contact /> },
  //     ],
  //   },
  // ]);
  return (
    <>
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={appRoutes} />
      </Suspense>{" "} */}

      <section className="mt-10 text-2xl">
        <div className="flex flex-col justify-center items-center space-y-5">
          {/* <page /> */}
          {/* <Parent /> */}
          {/* <ComponentLifeCycle /> */}
          {/* <UseReducerHook /> */}
          {/* <UseCallBackHook /> */}
          {/* <UseMemoHook /> */}
          <UseRefHook />
        </div>
      </section>
    </>
  );
}
