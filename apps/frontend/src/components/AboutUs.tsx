import React from "react";

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <>
      <section className="w-full flex flex-col items-center">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 text-center flex flex-col items-center justify-center">
            <div className="space-y-2 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Meet the Team
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The talented individuals behind the scenes, crafting the best
                web experiences.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="John Doe"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Co-Founder, CEO</p>
                  <p className="text-sm text-muted-foreground">
                    John is a seasoned entrepreneur with a passion for building
                    innovative web applications. He leads the company vision
                    and strategy.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Jane Smith"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-muted-foreground">Co-Founder, CTO</p>
                  <p className="text-sm text-muted-foreground">
                    Jane is a seasoned software engineer with a strong
                    background in web development. She oversees the technical
                    direction of the company.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Michael Johnson"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Lead Designer</p>
                  <p className="text-sm text-muted-foreground">
                    Michael is a talented designer with a keen eye for user
                    experience. He leads the design team and ensures our
                    products are visually stunning.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Emily Davis"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Emily Davis</h3>
                  <p className="text-muted-foreground">Lead Engineer</p>
                  <p className="text-sm text-muted-foreground">
                    Emily is a seasoned engineer with a strong background in
                    full-stack web development. She leads the engineering team
                    and ensures our products are technically sound.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}