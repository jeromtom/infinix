import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github } from "@/components/shared/icons";
import Link from 'next/link';
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>An ecosystem to eliminate e-waste</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            By Team X.
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/jeromtom/infinix2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>Star on GitHub</p>
          </a>
        </motion.div>
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo}) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
          />
        ))}
      </div>
    </Layout>
  );
}

const features = [
  {
    title: "Assessment",
    description:
      "Find in-depth information about your current electronic devices.",
    demo: (      <div>
      <Link href="/repair">
        <Image
          src="/components/home/repair-service-icon.svg"
          alt="Repair"
          width={400}
          height={300}
        ></Image>
      </Link>
    </div>
    ),
  },
  {
    title: "Repair",
    description:
      "Find an authorised repair shop near you help you do it yourself",
    demo: (
      <div>
        <Link href="/repair">
          <Image
            src="/components/home/repair-service-icon.svg"
            alt="Repair"
            width={400}
            height={300}
          ></Image>
        </Link>
      </div>
    ),
  },
  {
    title: "Marketplace",
    description:
      "Buy refurbished electronic devices and sell old or damaged devices.",
    demo: (
      <div>
        <Link href="/repair">
          <Image
            src="/components/home/repair-service-icon.svg"
            alt="Repair"
            width={400}
            height={300}
          ></Image>
        </Link>
      </div>
    ),
  },
];
