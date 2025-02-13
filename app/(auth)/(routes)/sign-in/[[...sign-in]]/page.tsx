import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white w-full h-full">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="w-full relative lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 overflow-hidden">
          <Image
            alt=""
            src="/assets/images/logo.png"
            className="absolute inset-0 h-full w-full object-cover"
            width={1440}
            height={1440}
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Bienvenido a Escuela de Libertad
            </h1>

            {/* <p className="mt-4 leading-relaxed text-gray-500">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
							nam dolorum aliquam, quibusdam aperiam voluptatum.
						</p> */}

            <div className="w-full h-full flex justify-center items-center mt-10">
              <SignIn
                path="/sign-in"
                routing="path"
                signUpUrl="/sign-up"
                appearance={{
                  elements: {
                    guestButton:
                      "bg-blue-500 text-white font-bold py-2 px-4 rounded",
                  },
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
