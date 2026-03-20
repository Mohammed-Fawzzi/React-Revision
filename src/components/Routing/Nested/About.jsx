import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <section className="p-5">
      <h1 className="mb-5 font-bold">Choose your track</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum aliquam
        quam officia eius ea reiciendis nesciunt dolores, tenetur fugit,
        cupiditate illum veritatis, magnam vitae. Quis et error molestiae.
        Aliquam, natus.
      </p>
      <div className="flex mt-10">
        <div className="w-1/4">
          <ul>
            <li>
              <Link to={""} className="underline text-sky-800">
                Ui Ux
              </Link>
            </li>
            <li>
              <Link to={"web"} className="underline text-sky-800">
                Web
              </Link>
            </li>
            <li>
              <Link to={"flutter"} className="underline text-sky-800">
                Flutter
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
}
