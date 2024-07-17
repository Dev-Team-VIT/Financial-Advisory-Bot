import React, { SVGProps } from "react";
import {Link} from "react-router-dom";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-bold">Acme Financial</h4>
            <p className="mt-4 text-muted-foreground">
              Trusted financial advice for individuals and businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold">Quick Links</h4>
              <nav className="mt-4 space-y-2">
                <Link to="/" >
                  <a className="text-muted-foreground hover:underline">Home</a>
                </Link>
                <Link to="/about" >
                  <a className="text-muted-foreground hover:underline">About Us</a>
                </Link>
                <Link to="/services" >
                  <a className="text-muted-foreground hover:underline">Services</a>
                </Link>
                <Link to="/contact" >
                  <a className="text-muted-foreground hover:underline">Contact</a>
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="text-lg font-bold">Follow Us</h4>
              <div className="mt-4 flex space-x-4">
                <Link to="https://www.facebook.com">
                  <a className="text-muted-foreground hover:underline" aria-label="Facebook">
                    <FacebookIcon className="h-6 w-6" />
                  </a>
                </Link>
                <Link to="https://www.twitter.com">
                  <a className="text-muted-foreground hover:underline" aria-label="Twitter">
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                </Link>
                <Link to="https://www.linkedin.com">
                  <a className="text-muted-foreground hover:underline" aria-label="LinkedIn">
                    <LinkedinIcon className="h-6 w-6" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold">Contact Us</h4>
            <p className="mt-4 text-muted-foreground">
              123 Main Street, Anytown USA
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@acmefinancial.com
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-m">
          © {new Date().getFullYear()} Acme Financial. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}