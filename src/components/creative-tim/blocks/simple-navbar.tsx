"use client";

import { useState } from "react";
import { Bell, Menu, Heart, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

export default function SimpleNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full overflow-visible rounded-lg border border-transparent p-2 shadow-transparent px-10">
      <div className="relative flex items-center gap-8">
        <Link to="/" className="mr-8 block text-base leading-tight font-bold">
          CODAI
        </Link>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full lg:relative lg:flex lg:flex-row lg:items-center ${
            isMenuOpen &&
            "bg-primary rounded-3xl mt-2 text-primary-foreground z-20"
          } `}
        >
          <ul className="mt-4 flex flex-col gap-y-1.5 p-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-x-4 lg:p-0">
            <li>
              <Link to="/shop" className="p-1 text-sm">
                Shop
              </Link>
            </li>
            {/* <li>
              <a href="#" className="p-1 text-sm">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="p-1 text-sm">
                Social
              </a>
            </li> */}
            <li>
              <a href="#" className="p-1 text-sm">
                Social
              </a>
            </li>
            <li>
              <a href="#" className="p-1 text-sm">
                About Us
              </a>
            </li>
            <li>
              <Button
                variant="secondary"
                className="w-full shadow-sm hover:shadow-md md:w-1/3 lg:hidden"
              >
                Logout
              </Button>
            </li>
          </ul>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-muted hidden lg:grid"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-muted mr-1 hidden lg:grid"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {/* <div className="w-full max-w-sm min-w-50">
            <Select defaultValue="project-1">
              <SelectTrigger className="border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="project-1">Project #1</SelectItem>
                <SelectItem value="project-2">Project #2</SelectItem>
                <SelectItem value="project-3">Project #3</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          <Button
            className="hidden lg:inline-flex"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
          <Button
            className="hidden lg:inline-flex"
            variant={'link'}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
          <Button
            size="icon"
            className="grid lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
