const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <>
            {footerLinks.map((link: { href: string; label: string }, index: number) => (
                <a key={index} href={link.href} className="mr-4">
                    {link.label}
                </a>
            ))}
        </>
    );
}
