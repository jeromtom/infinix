import Card from "@/components/home/card";
import Layout from "@/components/layout";
import BattVitals from "@/components/home/batt-vitals";
import CPUVitals from "@/components/home/cpu-vitals";
import Balancer from "react-wrap-balancer";

export default function repair() {
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
    title: "CPU Temperature",
    description:
      "Find out how healthy your CPU is.",
    demo: <CPUVitals/>,
  },
  {
    title: "Battery Health",
    description:
      "Find out how healthy your battery is.",
    demo: <BattVitals/>,
  },
];