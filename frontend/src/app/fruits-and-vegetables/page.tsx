import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { WobbleCard } from "@/components/ui/wobble-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const categories = [
  {
    id: 1,
    name: "Fruits",
    image: "/fruits.jpg",
    href: "/fruits",
  },
  {
    id: 2,
    name: "Vegetables",
    image: "/vegetables.jpg",
    href: "/vegetables",
  },
  {
    id: 3,
    name: "Organic",
    image: "/organic.jpg",
    href: "/organic",
  },
];
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

const FruitsAndVegetablesPage = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6">
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden rounded-lg container mx-auto">
        {/* Background Image */}
        <Image
          src="/fruits-and-vegetables.jpg"
          alt="Fresh Fruits and Vegetables"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Fresh From <span className="text-green-400">Nature</span> To Your
              Table
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg">
              Discover our premium selection of organic fruits and vegetables,
              harvested at peak freshness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition duration-300 transform hover:scale-105">
                Shop Now
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Optional decorative element */}
        <div className="hidden md:block absolute -bottom-10 right-10 w-32 h-32 bg-green-500 rounded-full opacity-30 blur-2xl"></div>
      </div>

      {/* Subcategory navigationbar */}
      <section className="container mx-auto py-12">
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>
    </section>
  );
};

export default FruitsAndVegetablesPage;
