import Button from "@/components/Button";
import DesignExample1 from '@/assets/images/design-example-1.png';
import DesignExample2 from '@/assets/images/design-example-2.png';
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={DesignExample1} alt="Design Example1 Image" />
                </div>

                <div className="absolute -right-64 -top-16  hidden lg:block ">
                    <Image src={DesignExample2} alt="Design Example2 Image" />
                </div>

                <div className="absolute left-56 top-96  hidden lg:block">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute right-80 -top-4  hidden lg:block">
                    <Pointer name="John" color="red" />
                </div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-900 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactfull Design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools that should&apos;t slow you down. Layers
                    combiles powerful features with an intuitive interface that
                    keep in in your creative flow.
                </p>
                <form className="flex  border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto ">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                    />
                    <Button
                        variant="primary"
                        type="submit"
                        className="whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
