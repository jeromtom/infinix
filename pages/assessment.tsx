import Card from "@/components/home/card";
import Layout from "@/components/layout";
import WebVitals from "@/components/home/web-vitals";

export default function assessment() {
    return (
        <Layout>
            <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
                {features.map(({ title, description, demo, large}) => (
                        <Card
                            key={title}
                            title={title}
                            description={description}
                            demo={demo}
                            large={large}
                        />
                        ))}
                </div>
        </Layout>
 );
}

const features = [
 {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Battery Health",
    description:
      "Find out how healthy your battery is.",
    demo: <WebVitals />,
  },
];