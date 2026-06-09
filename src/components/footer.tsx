import { Button } from "./ui/button";
import { Field } from "./ui/field";
import { Input } from "./ui/input";

function Footer() {
  return (
    <footer className="bg-primary px-4 md:px-8 lg:px-10 py-16 text-white">
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        
        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
          
          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-4">Quick Links</h2>

            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-semibold mb-4">Support</h2>

            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Journal</a></li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li><a href="#" className="hover:text-white">Contacts</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-semibold mb-4">Follow Us</h2>

            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
              <li><a href="#" className="hover:text-white">X (Twitter)</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full lg:max-w-md">
          <h2 className="text-xl font-medium mb-4">
            Subscribe to Newsletter
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Add your email"
              className="bg-white text-black"
            />

            <Button className="bg-white text-black hover:bg-gray-200">
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-gray-300 mt-4">
            Get updates about new collections, promotions and exclusive offers.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-12 border-white/20" />

      {/* Brand */}
      <div className="flex justify-center overflow-hidden">
        <h1
          className="
            text-4xl
            sm:text-6xl
            md:text-7xl
            lg:text-9xl
            font-light
            tracking-wider
            text-center
          "
        >
          CODAI®
        </h1>
      </div>
    </footer>
  );
}

export default Footer;