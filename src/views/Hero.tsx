import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "/public/heroimage.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-6">
      {/* {left div} */}
      <div className="flex-1">
        <Badge
          aria-label="redirect the user to sale page"
          className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700"
        >
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button
          aria-label="redirect the user to sale page"
          className="bg-black h-14 w-32 px-3 mt-4 gap-1"
        >
          <ShoppingCart size={18} />
          <p>Start Shopping</p>
        </Button>
        <div className="flex gap-3 mt-8">
          <Image
            width={90}
            height={90}
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=256&q=75"
            }
            alt="bazaar"
          />
          <Image
            width={90}
            height={90}
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=256&q=75"
            }
            alt="bustle"
          />
          <Image
            width={90}
            height={90}
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=256&q=75"
            }
            alt="versace"
          />
          <Image
            width={90}
            height={90}
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=256&q=75"
            }
            alt="instyle"
          />
        </div>
      </div>
      {/* {Right Div} */}
      <div className="flex-1 rounded-full bg-orange-100">
        <Image src={heroImage} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
