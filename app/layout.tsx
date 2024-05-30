"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";

import "./globals.css";
import "material-icons/iconfont/material-icons.css";

const MouseContextProvider = dynamic(() => import("./context/mouse-context"));
const DotRing = dynamic(() => import("./components/DotRing/DotRing"));

const links = [
  { key: "link-1", label: "About", icon: "person", href: "/about" },
  {
    key: "link-2",
    label: "Experiences",
    icon: "insert_drive_file",
    href: "/experiences",
  },
  { key: "link-3", label: "Projects", icon: "attach_file", href: "/projects" },
  { key: "link-4", label: "Course", icon: "library_books", href: "/courses" },
  { key: "link-5", label: "Bootcamp", icon: "groups", href: "/bootcamp" },
  { key: "link-6", label: "Contact", icon: "contact_page", href: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning={true}>
      <body>
        <MouseContextProvider>
          <DotRing />
          <div className="flex flex-col gap-8 xl:flex-row">
            <div className="drawer drawer-mobile bg-transparent ">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="mb-4 drawer-content flex flex-col justify-center before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl  after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
                {children}
              </div>

              {pathname != "/" && (
                <div className="drawer-side ml-[10rem] border border-t-0 border-b-0 border-l-0 border-slate-500">
                  <div className="flex-shrink-0 xl:min-w-[15rem]">
                    <div className="sticky top-[8.5rem] ">
                      <div className="card ">
                        <div className="card-body">
                          <ul className="my-auto p-4 w-80 text-base-content steps steps-vertical">
                            {links.map((link) => (
                              <li
                                key={uuidv4()}
                                className={`step ${
                                  pathname == link.href ? `step-primary` : ``
                                }`}
                              >
                                <Link
                                  key={link.key}
                                  href={link.href}
                                  className={`flex items-center py-3 font-bold ${
                                    pathname == link.href ? `` : `text-white`
                                  }`}
                                >
                                  <span className="material-icons">
                                    {link.icon}
                                  </span>
                                  <span className="flex-1 ml-3 whitespace-nowrap">
                                    {link.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </MouseContextProvider>
      </body>
    </html>
  );
}
