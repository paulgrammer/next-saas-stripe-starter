"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const reviews = [
  {
    name: "Duras",
    username: "@duras",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec arcu at nulla facilisis sagittis.",
    img: "https://avatar.vercel.sh/duras",
  },
  {
    name: "apis",
    username: "@apis",
    body: "Suspendisse potenti. Praesent a nisl et justo tincidunt hendrerit id non ex.",
    img: "https://avatar.vercel.sh/apis",
  },
  {
    name: "yayza_",
    username: "@yayza_",
    body: "Curabitur ac velit ut justo convallis maximus. Duis euismod lorem ut felis pharetra, a tempus sapien eleifend.",
    img: "https://avatar.vercel.sh/yayza",
  },
  {
    name: "Vaurion",
    username: "@vaurion",
    body: "Vestibulum volutpat orci ac ex fermentum, ut iaculis justo tempor. Integer euismod metus nec justo sollicitudin interdum.",
    img: "https://avatar.vercel.sh/vaurion",
  },
  {
    name: "vinum?",
    username: "@vinum",
    body: "Aenean lacinia nisi a odio vulputate, vel pharetra turpis fermentum. Donec tempus erat at sapien dictum suscipit.",
    img: "https://avatar.vercel.sh/vinum",
  },
  {
    name: "vadzim",
    username: "@vadzim",
    body: "Sed ut erat ac quam posuere tincidunt a sit amet ligula. Ut vitae lectus at quam eleifend dictum.",
    img: "https://avatar.vercel.sh/vadzim",
  },
  {
    name: "Slurpy Beckerman",
    username: "@slurpy",
    body: "Mauris euismod, felis eu malesuada tincidunt, elit nunc vehicula nisl, a malesuada odio ligula nec metus.",
    img: "https://avatar.vercel.sh/slurpy",
  },
  {
    name: "lua",
    username: "@lua",
    body: "Duis convallis lorem ac nisl tincidunt, nec varius orci accumsan. Fusce euismod nunc at justo vestibulum scelerisque.",
    img: "https://avatar.vercel.sh/lua",
  },
  {
    name: "johnnygri",
    username: "@johnnygri",
    body: "Nulla facilisi. Nam id mi ut libero pharetra ultricies. Sed sit amet lacus non nisl posuere molestie.",
    img: "https://avatar.vercel.sh/johnnygri",
  },
  {
    name: "HiJoe",
    username: "@hijoe",
    body: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer congue erat ut justo.",
    img: "https://avatar.vercel.sh/hijoe",
  },
  {
    name: "johannes0910",
    username: "@johannes0910",
    body: "Aliquam erat volutpat. Phasellus accumsan lacus non lacus dictum, ut tempus lorem dapibus.",
    img: "https://avatar.vercel.sh/johannes0910",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MoreTestimonials() {
  return (
    <section className="pb-28">
      <MaxWidthWrapper>
        <HeaderSection
          label="Extra Testimonials"
          title="Lorem Ipsum Dolor Sit Amet"
          subtitle="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
