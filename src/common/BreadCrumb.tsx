import Image from "next/image";

interface BreadcrumbProps {
  title: string;
  subtitle?: string | null;
  image?: string; // Optional image
  alt?: string;
  size?: "small" | "medium" | "large"; // Image size variants
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle, image, alt, size = "medium" }) => {
  // Define width & height based on size prop
  const imageSizes = {
    small: "w-[250px] md:w-[300px] lg:w-[350px] h-[200px] md:h-[250px] lg:h-[300px]",
    medium: "w-[300px] md:w-[400px] lg:w-[500px] h-[250px] md:h-[300px] lg:h-[350px]",
    large: "w-[350px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[350px] lg:h-[400px]",
  };

  return (
    <div className="relative w-full bg-[#E7F5FD] pt-20 md:pt-36 max-w-8xl flex flex-col md:flex-row items-center justify-between py-3 px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28">
      {/* Cloud Background */}
      <div
        className="absolute -bottom-14 left-0 w-full h-[180px] md:h-[220px] lg:h-[280px] bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/CLOUD.png')" }}
      ></div>

      {/* Content */}
      <div className="relative w-full flex flex-col lg:flex-row items-start justify-between">
        {/* Left Side - Title & Subtitle */}
        <div className="w-full lg:w-1/2 text-start">
          <h2 className="text-2xl md:text-4xl font-medium text-[#E4434B]">{title}</h2>
          {subtitle && <h3 className="text-lg md:text-xl font-medium text-gray-700 mt-2">{subtitle}</h3>}
        </div>

        {/* Right Side - Image or Placeholder */}
        <div className="w-full mt-3 lg:w-1/2 flex justify-end">
          {image ? (
            <div className={`${imageSizes[size]}`}>
              <Image
                src={image}
                alt={alt || "Breadcrumb Image"}
                width={600}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          ) : (
            <div className={`${imageSizes[size]} bg-transparent flex items-center justify-center rounded-lg`}>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
