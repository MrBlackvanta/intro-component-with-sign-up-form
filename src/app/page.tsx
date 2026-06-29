import SignupForm from "@/components/signup-form";

export default function Page() {
  return (
    <main className="bg-red flex flex-1 flex-col items-center justify-center bg-[url('/bg-intro-mobile.png')] bg-cover bg-no-repeat px-6 py-16 lg:bg-[url('/bg-intro-desktop.png')]">
      <div className="grid w-full max-w-277.5 items-center gap-16 text-white lg:grid-cols-2 lg:gap-13">
        <div className="text-center lg:text-left">
          <h1 className="text-[1.75rem] leading-9 font-bold lg:text-[3.125rem] lg:leading-13.75">
            Learn to code by watching others
          </h1>
          <p className="mt-4 leading-6.5 font-medium lg:mt-2.75">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="shadow-card bg-blue rounded-lg px-12 py-5 text-center">
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </p>
          <SignupForm />
        </div>
      </div>
    </main>
  );
}
