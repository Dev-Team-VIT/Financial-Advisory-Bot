import Placeholder from "../assets/placeholder.svg";


export default function AboutUs() {
  return (
    <>
      <section id="aboutus" className="w-full flex flex-col items-center">
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
              <div className="space-y-4 bg-background flex flex-col items-center justify-center p-[20px] rounded-lg">
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[100px] flex flex-row items-center justify-center">
                  <img
                    src = {Placeholder}
                    alt="John Doe"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Pratham</h3>
                  <p className="text-muted-foreground">Backend Developer</p>
                  <p className="text-sm text-muted-foreground">
                  Pratham is our skilled backend developer, ensuring efficient, secure, and scalable systems. His expertise in backend technologies is vital to our platform's seamless functionality. We're proud to have him on our team.
                  </p>
                </div>
              </div>
              <div className="space-y-4 bg-background flex flex-col items-center justify-center p-[20px] rounded-lg">
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[100px] flex flex-row items-center justify-center">
                  <img
                    src = {Placeholder}
                    alt="John Doe"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Aviral Garg</h3>
                  <p className="text-muted-foreground">AI Developer</p>
                  <p className="text-sm text-muted-foreground">
                  Aviral Garg is our talented AI developer, crafting intelligent algorithms that power our financial advisory services. His expertise in AI is key to delivering personalized and insightful recommendations. We're proud to have him on our team.
                  </p>
                </div>
              </div>
              <div className="space-y-4 bg-background flex flex-col items-center justify-center p-[20px] rounded-lg">
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[100px] flex flex-row items-center justify-center">
                  <img
                    src = {Placeholder}
                    alt="John Doe"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Garv Anand</h3>
                  <p className="text-muted-foreground">AI Developer</p>
                  <p className="text-sm text-muted-foreground">
                  Garv Anand is our innovative AI developer, creating smart algorithms that drive our financial advisory solutions. His AI expertise ensures personalized and accurate recommendations. We're proud to have him on our team.
                  </p>
                </div>
              </div>
              <div className="space-y-4 bg-background flex flex-col items-center justify-center p-[20px] rounded-lg">
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[100px] flex flex-row items-center justify-center">
                  <img
                    src = {Placeholder}
                    alt="John Doe"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Ansh Bhatt</h3>
                  <p className="text-muted-foreground">Frontend Developer</p>
                  <p className="text-sm text-muted-foreground">
                  Ansh Bhatt is our creative frontend developer, designing intuitive and engaging user interfaces. His expertise in frontend technologies ensures a seamless and enjoyable user experience. We're proud to have him on our team.
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