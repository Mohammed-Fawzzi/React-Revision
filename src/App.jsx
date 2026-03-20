import React, { Suspense } from "react";
import Page from "@/components/Page";
import Parent from "@/components/cruds/Parent";
import ComponentLifeCycle from "@/components/ComponentLifeCycle/ComponentLifeCycle";
import UseReducerHook from "@/components/hooks/UseReduce/UseReducerHook";
import UseCallBackHook from "@/components/hooks/UseCallBack/UseCallBackHook";
import UseMemoHook from "@/components/hooks/UseMemo/UseMemoHook";
import UseRefHook from "@/components/hooks/UseRef/UseRefHook";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const Layout = React.lazy(() => import("@/components/Routing/Layout"));
  const Home = React.lazy(() => import("@/components/Routing/Home"));
  // Nested Routes
  const About = React.lazy(() => import("@/components/Routing/Nested/About"));
  const UiUx = React.lazy(() => import("@/components/Routing/Nested/UiUx"));
  const Web = React.lazy(() => import("@/components/Routing/Nested/Web"));
  const Flutter = React.lazy(
    () => import("@/components/Routing/Nested/Flutter"),
  );

  const Gallery = React.lazy(() => import("@/components/Routing/Gallery"));
  const Contact = React.lazy(() => import("@/components/Routing/Contact"));

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
          {/* <Page /> */}
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
