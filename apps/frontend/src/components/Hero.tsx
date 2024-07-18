
import {Link} from "react-router-dom"
import { cn } from "../lib/utils";
import HeroImage from "../assets/HeroImage.svg"

export function Hero() {
  return (
    <>
      <main className="flex-1 relative z-10">
        <section className="h-[100vh] py-20 text-primary-foreground flex flex-col justify-center">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="text-4xl text-secondary font-bold tracking-tight sm:text-7xl">
                AI-Powered Financial Advisory
                </h1>
                <p className="mt-4 text-lg">
                Discover our AI-driven platform offering real-time data analysis, personalized financial advice tailored to your needs, and seamless integration with your existing tools. Our commitment to security, scalability, and transparency ensures your financial decisions are informed, efficient, and optimized for success. Experience financial advisory redefined with us.
                </p>
                <div className="mt-6">
                  <Link
                    to="#"
                    className="inline-flex items-center rounded-md bg-primary px-5 py-2 text-lg font-medium text-background shadow-sm transition-colors hover:bg-mutedOrange focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >Get in Touch
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src={HeroImage}
                  width="800"
                  height="800"
                  alt="Hero Image"
                  className="mx-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <br />
      </main>
      <div
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,white, white)]"
        )}
      >
      </div>
    </>
  );
}