"use client";

import {
  IconActivity,
  IconCloud,
  IconDatabase,
  IconEaseInOut,
  IconRocket,
  IconTemplate,
  IconTerminal,
  IconTerminal2,
  IconUsers,
} from "@tabler/icons-react";
import { Layers, UnlockIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const features = [
  {
    title: "Lorem Ipsum Dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <IconRocket />,
  },
  {
    title: "Sed Do Eiusmod",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <Layers />,
  },
  {
    title: "Ut Enim Ad Minim",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    icon: <IconCloud />,
  },
  {
    title: "Duis Aute Irure",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    icon: <IconUsers />,
  },
  {
    title: "Excepteur Sint Occaecat",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    icon: <IconDatabase />,
  },
  {
    title: "Consectetur Adipiscing",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: <IconTerminal />,
  },
  {
    title: "Quis Autem Vel",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
    icon: <IconUsers />,
  },
  {
    title: "Nemo Enim Ipsam",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    icon: <IconTemplate />,
  },
  {
    title: "Neque Porro Quisquam",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    icon: <UnlockIcon />,
  },
  {
    title: "Lorem Ipsum Dolor Sit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <IconActivity />,
  },
  {
    title: "Ut Labore Et Dolore",
    description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Magni Dolores Eos",
    description: "Magni dolores eos qui ratione voluptatem sequi nesciunt.",
    icon: <IconEaseInOut />,
  },
];

export function MoreFeatures() {
  return (
    <section className="pt-28">
      <MaxWidthWrapper>
        <HeaderSection
          label="Extra Features"
          title="Lorem Ipsum Dolor Sit Amet"
          subtitle="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="relative z-10 mx-auto mt-10 grid max-w-7xl grid-cols-1 py-10 max-sm:mx-0 max-sm:w-full max-sm:p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col border-neutral-200 py-4 dark:border-neutral-800 md:py-10 lg:border-r",
        [0, 4, 8].includes(index) &&
          "border-neutral-200 dark:border-neutral-800 lg:border-l",
        index < 8 && "border-neutral-200 dark:border-neutral-800 lg:border-b",
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-neutral-200 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-neutral-200 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-neutral-900 dark:bg-neutral-700 dark:group-hover/feature:bg-white" />
        <span className="inline-block text-neutral-900 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
