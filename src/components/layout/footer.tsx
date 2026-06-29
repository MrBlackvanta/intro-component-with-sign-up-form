import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
} from "@/components/icons";

const navLinks = [
  { label: "FAQs", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Press Kit", href: "#" },
  { label: "Install Guide", href: "#" },
];

const socialLinks = [
  { label: "Clipboard on Facebook", href: "#", Icon: FacebookIcon },
  { label: "Clipboard on Twitter", href: "#", Icon: TwitterIcon },
  { label: "Clipboard on Instagram", href: "#", Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer>
      <p className="pb-0.5 text-center text-sm">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="v-footer-link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="v-footer-link"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </p>
    </footer>
  );
}
