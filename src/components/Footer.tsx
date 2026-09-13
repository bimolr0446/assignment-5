import Log from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className=" border-gray-200 bg-white px-10 py-16 shadow-sm">
      <div className="flex justify-between gap-10">
        <div className="w-87.5">
          <img
            src={Log}
            alt=""
            className="mb-4 w-36 transition-transform duration-300 hover:scale-105"
          />

          <p className="text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <ul className="mt-5 flex gap-5 text-sm font-medium text-gray-500">
            <li className="cursor-pointer transition hover:text-blue-500">
              GitHub
            </li>
            <li className="cursor-pointer transition hover:text-blue-500">
              Twitter
            </li>
            <li className="cursor-pointer transition hover:text-blue-500">
              Linkedin
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-bold tracking-wider text-gray-800">
            PRODUCT
          </h5>

          <ul className="space-y-3 text-sm text-gray-500">
            <li className="cursor-pointer transition hover:translate-x-1 hover:text-blue-500">
              Home
            </li>
            <li className="cursor-pointer transition hover:translate-x-1 hover:text-blue-500">
              Technologies
            </li>
            <li className="cursor-pointer transition hover:translate-x-1 hover:text-blue-500">
              Project
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-gray-800">
            COMPANY
          </h3>

          <ul className="space-y-3 text-sm text-gray-500">
            <li className="cursor-pointer transition hover:translate-x-1 hover:text-blue-500">
              About
            </li>
            <li className="cursor-pointer transition hover:translate-x-1 hover:text-blue-500">
              Contact
            </li>
            <li className="cursor-pointer transition hover:translate-x-1 hover:text-blue-500">
              Careers
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-bold tracking-wider text-gray-800">
            LEGAL
          </h5>

          <ul className="space-y-3 text-sm text-gray-500">
            <li className="cursor-pointer transition hover:translate-x-1 hover:text-blue-500">
              Privacy
            </li>
            <li className="cursor-pointer transition hover:translate-x-1 hover:text-blue-500">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
