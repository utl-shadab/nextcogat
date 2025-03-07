"use client";

const Giftedness = () => {
    return (
        <section className="w-full mt-24 pb-20  py-3 container">
            {/* Left Section - Text Content */}
            <div className="flex flex-col pb-20  md:flex-row items-center justify-between">
                <div className="w-full md:w-3/5">
                    <h2 className="text-xl md:text-3xl font-poppins font-medium text-black leading-snug">
                        About Giftedness:
                        <br />
                        <span className="text-black">What Parents Need to Know</span>
                    </h2>
                    <p className="text-gray-600 text-base mt-4 leading-relaxed w-full md:w-[90%] ">
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
                        <img
                            src="/cogatImage/giftedness_pic.png"
                            alt="Astronaut holding a star"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#F3F4FF] p-10  md:p-10 rounded-[60px] ">
                <h3 className="text-xl md:text-3xl text-center font-poppins font-medium text-black">
                    What Exactly Is Giftedness?
                </h3>
                <p className="text-gray-700 text-center font-medium  text-md md:text-[18px] mt-4 ">
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
