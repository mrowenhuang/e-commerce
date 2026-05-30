"use client";

import * as React from "react";
import { Box, Files, FileText, Menu, User } from "lucide-react";

import { Button } from "../../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../../ui/field";
import { Input } from "../../ui/input";

const NAV_LIST = [
  {
    label: "Pages",
    icon: Files,
  },
  {
    label: "Account",
    icon: User,
  },
  {
    label: "Blocks",
    icon: Box,
  },
  {
    label: "Docs",
    icon: FileText,
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {NAV_LIST.map(({ icon: Icon, label }) => (
        <li key={label}>
          <a
            href="#"
            className="hover:text-primary flex items-center gap-x-2 p-1 text-sm text-neutral-900 transition-colors dark:text-neutral-100"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    }

    window.addEventListener("resize", () => handleResize);

    return () => {
      window.removeEventListener("resize", () => handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="relative flex items-center">
        <a href="#" className="ml-1.5 block py-1 text-lg font-bold">
          Creative Tim UI
        </a>
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <NavList />
        </div>
        <Button size="sm" className="hidden lg:ml-auto lg:inline-block">
          Sign In
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="ml-auto grid lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      {openNav && (
        <>
          <NavList />
          <Button className="mt-4 w-full" size="sm">
            Sign In
          </Button>
        </>
      )}
    </nav>
  );
}

export default function Hero03() {
  return (
    <header className="flex h-full min-h-screen w-full flex-col p-4">
      {/* <div className="absolute top-6 left-1/2 w-full -translate-x-1/2 px-4 lg:px-6">
        <Nav />
      </div> */}
      <div className="grid h-full grow grid-cols-1 items-center lg:grid-cols-2">
        <div className="px-0 pt-24 md:pb-12 lg:px-2 lg:py-24 justify-center flex">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your username and and password to login
              </CardDescription>
              <CardAction>
                <Button variant={"link"}>Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Username</FieldLabel>
                    <Input id="username" type="text" placeholder="john doe" />
                  </Field>
                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="---------"
                    />
                    <div className=" justify-end flex">
                      <Button variant={"link"}>Forget Password</Button>
                    </div>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </CardContent>
            <CardFooter>
              <Button className="w-full" >Sign In</Button>
            </CardFooter>
          </Card>
        </div>
        <img
          alt="Nature landscape with mountains"
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85"
          className="h-full w-full rounded-xl object-cover shadow-2xl"
        />
      </div>
    </header>
  );
}
