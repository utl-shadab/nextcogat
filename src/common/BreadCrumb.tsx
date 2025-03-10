import { Mail } from "lucide-react";

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
    <div className="relative w-full bg-[#E7F5FD] pt-20 md:pt-36 flex flex-col md:flex-row items-center justify-between py-3">
      {/* Cloud Background */}
      <div
        className="absolute -bottom-14 left-0 w-full h-[180px] md:h-[220px] lg:h-[280px] bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: "url('/CLOUD.png')" }}
      ></div>
      <div className="container">


        {/* Content */}
        <div className="relative w-full flex flex-col lg:flex-row items-start justify-between">
          {/* Left Side - Title & Subtitle */}
          <div className="w-full lg:w-1/2 text-start">
            <h2 className="text-2xl md:text-4xl font-medium text-[#E4434B]">{title}</h2>
            {subtitle && <><div className="flex items-end gap-3 "> <Mail className="h-7 w-7 text-[#0479D0]" /><h3 className="text-lg md:text-lg font-medium font-poppins text-[#0479D0] mt-5">{subtitle}</h3></div></>}
          </div>

          {/* Right Side - Image or Placeholder */}
          <div className="w-full mt-3 lg:w-1/2 flex justify-end">
            {image ? (
              <div className={`${imageSizes[size]}`}>
                <img
                  src={image}
                  alt={alt || "Breadcrumb Image"}
                  width={600}
                  height={400}
                  className="w-full h-[280px] md:h-[400px] object-contain"

                />
              </div>
            ) : (
              <div className={`${imageSizes[size]} bg-transparent flex items-center justify-center rounded-lg`}>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
