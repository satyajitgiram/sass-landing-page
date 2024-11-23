import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg'
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg'
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg'
import Image from "next/image";
import Avatar from "@/components/Avatar";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return ( 
    <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
            <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6">Where power meets <span className="text-lime-400">simplicity</span></h2>
            <div className="mt-12 grid grid-cols-1 gap-8">
                <FeatureCard title="Real-Time Collaboration" description="Work together seamlessly with conflict free editing">
                    <div className="aspect-video flex justify-center items-center">
                        <Avatar className="z-50">
                            <Image src={avatar1} alt="avatar 1" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-5 border-indigo-500 z-40">
                            <Image src={avatar2} alt="avatar 2" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-5 border-amber-500 z-30">
                            <Image src={avatar3} alt="avatar 3" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-5 border-transparent">
                            <div className="size-full bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1">
                                {Array.from({length: 3}).map((_, index) => (
                                    <span key={index} className="size-1.5 rounded-full bg-white inline-flex"></span>
                                ))}
                            </div>
                        </Avatar>
                    </div>
                </FeatureCard>
                <FeatureCard title="Interactive Prototyping" description="Engage your clients with prototypes that reaches to user actions"></FeatureCard>
                <FeatureCard title="Keyboard Quick Actions" description="Powerfull commands to help you create designs more quickly"></FeatureCard>
            </div>
            <div>
                {features.map((feature, index) =>(
                    <div key={index}>
                        <span></span>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}
