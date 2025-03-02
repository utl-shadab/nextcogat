"use client";

import Image from "next/image";

const Giftedness = () => {
    return (
        <section className="w-full -mt-5 pb-20  max-w-8xl  py-3 px-6 sm:px-4 md:px-8 lg:px-16 xl:px-28">
            {/* Left Section - Text Content */}
            <div className="flex flex-col pb-20  md:flex-row items-center justify-between">
                <div className="w-full md:w-3/5">
                    <h2 className="text-xl md:text-2xl font-poppins font-semibold text-black leading-snug">
                        About Giftedness:
                        <br />
                        <span className="text-black">What Parents Need to Know</span>
                    </h2>
                    <p className="text-gray-600 text-xl mt-4 leading-relaxed">
                        If you’re a parent of an elementary school child, you’ve probably
                        noticed that every kid is different in how they learn, play, and
                        interact with the world. But sometimes, you might notice your child is
                        picking up things a little faster than others or asking questions that
                        leave you scrambling for answers. These could be signs of giftedness,
                        a term that describes children who think and learn in ways that stand
                        out from the crowd.
                    </p>
                </div>

                {/* Right Section - Image */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
                        <Image
                            src="/cogatImage/giftedness_pic.png"
                            alt="Astronaut holding a star"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#F3F4FF] p-10  md:p-10 rounded-[60px] ">
                <h3 className="text-xl md:text-2xl text-center font-poppins font-semibold text-black">
                    What Exactly Is Giftedness?
                </h3>
                <p className="text-gray-700 text-center  text-md md:text-[19px] mt-4 ">
                    Giftedness is more than just being smart or getting good grades. It’s
                    about a child’s unique way of thinking, understanding, and
                    experiencing the world. Gifted kids often have an advanced ability in
                    one or more areas, like reading, math, creativity, or even leadership.
                    But it’s not just about IQ—giftedness is a mix of intellectual,
                    emotional, and social traits that make a child’s development different
                    from others.
                </p>
            </div>
        </section>
    );
};

export default Giftedness;
