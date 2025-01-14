import { FC } from "react";
import { AppContainer } from "./app-container";
import Image from "next/image";
import {
  Facebook,
  Github,
  Instagram,
  LucideIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { FooterNewsLetter } from "./footer-newsletter";

interface SocialsNetwork {
  icon: LucideIcon;
  link: string;
}

const socialNetworks: SocialsNetwork[] = [
  { icon: Facebook, link: "/" },
  { icon: Twitter, link: "/" },
  { icon: Github, link: "/" },
  { icon: Instagram, link: "/" },
  { icon: Youtube, link: "/" },
];

interface FooterGroup {
  title: string;
  items: { title: string; link?: string }[];
}

const footerGroups: FooterGroup[] = [
  {
    title: "our company",
    items: [
      { title: "About Yacht Charter" },
      { title: "Customer Testimonials" },
      { title: "Latest Weather Reports" },
      { title: "All Inclusive Day Trips" },
      { title: "Book Online Now" },
      { title: "Get In Touch" },
    ],
  },
  {
    title: "Contact Details",
    items: [
      { title: "+31 555 777 83", link: "tel:+31 555 777 83" },
      { title: "Customer Testimonials" },
      { title: "Latest Weather Reports" },
      { title: "All Inclusive Day Trips" },
      { title: "Book Online Now" },
      { title: "Get In Touch" },
    ],
  },
];

export const Footer: FC = () => {
  return (
    <footer>
      <AppContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <div className="space-y-4">
          <Image
            src={"/logo-f.png"}
            height={150}
            width={150}
            alt="Footer Logo"
          />
          <p className="text-sm">
            Seafarer, a WP theme equipped with the utmost practical features for
            your yacht & boat rental business.
          </p>
          <div className="space-y-3">
            {socialNetworks &&
              socialNetworks.length > 0 &&
              socialNetworks.map((socialNetwork) => (
                <Link href={socialNetwork.link} key={`${socialNetwork.icon}`} className="inline-block mr-3 hover:text-muted-foreground">
                  <socialNetwork.icon />
                </Link>
              ))}
          </div>
        </div>
        {footerGroups &&
          footerGroups.length > 0 &&
          footerGroups.map((footerGroup) => (
            <div key={footerGroup.title}>
              <h3 className="text-foreground uppercase mb-3 font-light">{footerGroup.title}</h3>
              <ul className="space-y-2 text-sm">
                {footerGroup.items.map((item) => (
                  <li key={item.title}>
                    <Link href={item.link ?? "#"}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <div className="space-y-4">
          <h3 className="text-foreground uppercase mb-3 font-light">Subscribe</h3>
          <p className="text-sm">
            Subscribe to our newsletter for regular updates on our seasonal
            promotions, offers & lots more.
          </p>
          <FooterNewsLetter />
        </div>
      </AppContainer>
      <p className="text-center p-8 md:p-8 border border-muted mt-4">© {new Date().getFullYear()} Qode Interactive, All Rights Reserved</p>
    </footer>
  );
};
