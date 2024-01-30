import Image from 'next/image';
import { brandsLogo } from "@/constants";

const BrandsLogo = () => {
    
  return (
      <section class="bg-teal-800 bg-opacity-5 dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 mx-auto py-8">
            <div class="grid w-full gap-1 md:gap-8 text-gray-500 grid-cols-7 dark:text-gray-400 items-center">
                {brandsLogo.map(({ id, src, alt }) => (
                    <Image
                        key={id}
                        height='200'
                        width='200'
                        src={src}
                        alt={alt}
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default BrandsLogo;
