import { Button } from "./ui/button";
import { Field } from "./ui/field";
import { Input } from "./ui/input";

function Footer() {
  return (
    <footer className="bg-amber-50 px-10 py-16">
      <div className="flex justify-around">
        <div className="flex-2 justify-around flex">
          <div>
            <h2 className="font-semibold mb-4">Quick Links</h2>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-semibold mb-4">Support</h2>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-black">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Contacts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h2 className="font-semibold mb-4">Follow Us</h2>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-black">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-4">Subscribe to Newsletter</h2>

          <Field orientation="horizontal">
            <Input
              type="email"
              placeholder="Add your email"
              className="bg-white text-black"
            />
            <Button>Subscribe</Button>
          </Field>

          <p className="text-sm text-gray-400 mt-4">
            Get updates about new collections, promotions and exclusive offers.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-12 border-black" />

      {/* Brand */}
      <div className="flex justify-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider">
          CODAI®
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
