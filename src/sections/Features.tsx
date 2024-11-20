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
    return <div>
        {features.map((feature: string, index: number) => (
            <div key={index} className="mb-8">
                <h3 className="text-lg font-bold mb-2">{feature}</h3>
                <p>Our {feature} feature is the best in the industry. It will blow your mind.</p>
            </div>
        ))}
    </div>;
}
