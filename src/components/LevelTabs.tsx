import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Clock, Minus, Plus, FileText } from "lucide-react";
import Image from "next/image";

// Define TypeScript Interfaces
interface Detail {
    title: string;
    content: string;
    image: string;
    solveText: string;
}

interface Tab {
    duration: string;
    questions: string;
    description: string;
    details: Detail[];
}

interface TabContent {
    [level: string]: {
        [tab: string]: Tab;
    };
}

interface MagnifierPosition {
    x: number;
    y: number;
}

interface ImageDimensions {
    width: number;
    height: number;
}

const LevelTabs: React.FC = () => {
    const [showMagnifier, setShowMagnifier] = useState<boolean>(false);
    const [magnifierPosition, setMagnifierPosition] = useState<MagnifierPosition>({ x: 0, y: 0 });
    const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({ width: 0, height: 0 });
    
    // Use proper type for the ref
    const imgRef = useRef<HTMLImageElement | null>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
        if (!imgRef.current) return;
        
        const { top, left, width, height } = imgRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        setMagnifierPosition({ x, y });
        setImageDimensions({ width, height });
    };
    
    const [activeLevel, setActiveLevel] = useState<string>("Level K–2");
    const [activeTab, setActiveTab] = useState<string>("Verbal Battery");
    const [openDetailIndex, setOpenDetailIndex] = useState<number | null>(null);
    
    const tabContent: TabContent = {
        "Level K–2": {
            "Verbal Battery": {
              duration: "40-45 minutes",
              questions: "~ 40-50 questions",
              description:
                "This section assesses your child's ability to understand and use language. It includes the following three sections:",
              details: [
                {
                  title: " Picture Analogies ",
      
                  content: "Determine the relationship between the top two pictures. Which picture goes best in the empty box with the question mark?​",
                  image: "/quetion/pictureAnalogies.jpg",
                  solveText:
                    "In this question, the tree is a fully grown sapling. In the choices below, the lion cub is what will grow to be an adult lion.  The correct answer is E. ​",
                },
                {
                  title: "  Picture Classification  ",
      
                  content: "Look at the top three pictures and determine how they are similar. In the bottom row, select the picture that is most similar to the top three.​",
                  image: "/quetion/pictureClassification.jpg",
                  solveText:
                    "In this question, the three pictures at the top are of musical instruments, but more specifically, they are string instruments. In the answer choices below, the piano and guitar are the only instruments clearly shown by themselves. However, since the guitar is the only string instrument, the answer is E.",
                },
                {
                  title: " Sentence Completion ",
      
                  content: "Read the question below and among the choices below select the picture that most appropriately answers the question.",
                  image: "/quetion/sentenceCompletion.jpg",
                  solveText:
                    "A lion is found in the jungle or at the zoo. A soccer ball is not usually found in a garden. Snails live in many gardens. The answer is A. ​​",
                },
              ],
            },
            "Non-Verbal Battery": {
              duration: "35-40 minutes",
              questions: "~ 35-40 questions",
              description:
                "This section measures your child’s ability to solve problems without the use of language, focusing on patterns, shapes, and spatial reasoning.",
              details: [
                {
                  title: " Paper Folding ",
      
                  content: "The question shows a piece of paper that has been folded along the dotted line and then has been cut with a pair of scissors or has had holes punched into it. How will the paper look when it is unfolded?​",
                  image: "/quetion/paperFolding.jpg",
                  solveText:
                    "The correct choice is D.​ The fold line acts like a mirror and each hole on one half of the fold creates a reflection image of the hole on the other half of the fold. So, the holes are reflected diagonally to the other side of the fold line.​",
                },
                {
                  title: " Figure Matrices ",
      
                  content: "Determine the relationship between the top two pictures. Which picture goes best in the empty box with the question mark?​",
                  image: "/quetion/figureMetrices.jpg",
                  solveText:
                    "Look closely at the shapes and colors in the top left box. Compare them with the ones on the right. The outermost shape (octagon) shrinks, changes color and is put inside the triangle. The other shapes also change color. The shapes are also shown as reflections (orientation of the shapes is changed). Similarly, the shapes in the bottom left box would have to change color and orientation, and the outermost shape should be shrunk and placed inside. The answer is C. ​",
                },
                {
                  title: " Figure Classification ",
      
                  content: "Look at the top three pictures and determine how they are similar. In the bottom row, select the picture that is most similar to the top three.",
                  image: "/quetion/figureClassification.jpg",
                  solveText:
                    "Look closely at the shapes in the three boxes at the top. Both shapes have the same number of sides. In the answer choices, only choice A has the same number of sides for both shapes. Therefore, the answer is A. ​",
                },
              ],
            },
            "Quantitative Battery": {
              duration: "40-45 minutes",
              questions: "~ 40-45 questions",
              description:
                "This section measures your child’s mathematical reasoning and problem-solving skills, including their ability to find patterns and understand relationships between numbers. The sections in this battery are:",
              details: [
                {
                  title: " Number Analogies ",
      
                  content: "Determine the mathematical relationship between the top two pictures. Which picture goes best in the empty box with the question mark?​",
                  image: "/quetion/numberAnalogies.jpg",
                  solveText:
                    "In this question, remember that fractions are parts of a whole.​The top left box shows half a red square. The top right box shows one whole red square. This means that the colored area of the square in the top right box is two times (2x) that of the square in the top left box.​ The bottom left box shows 3 lions. This means that the number of lions in the bottom right box should be two times (2x3) which is 6. The correct answer is C. ​",
                },
                {
                  title: " Number Puzzles",
      
                  content: "If both trains are carrying the same number of balls, then what should replace the question mark?​",
                  image: "/quetion/numberPuzzlev2.jpg",
                  solveText:
                    "Both trains need to carry the same number of items. The train above has 11 balls total. For the train below to have the same number of balls, it would need to add 3 more to the carriage with the question mark. The answer is C. ",
                },
                {
                  title: " Number Series ",
      
                  content: "Which picture should replace the question mark in the sequence? Which picture should replace the question mark in the sequence?​",
                  image: "/quetion/numberSeries.jpg",
                  solveText:
                    "In this question, the number of beads on each string alternate between 2 and 5. In other words, the sequence is 5,2,5,2, etc. Hence the first string should have 5 beads. The answer is C. ",
                },
              ],
            },
      
          },
          "Level 3–5": {
            "Verbal Battery": {
              duration: "40-45 minutes",
              questions: "~ 40-45 questions",
              description:
                "This section assesses your child's ability to understand and use language. It includes the following three sections:",
              details: [
                {
                  title: " Verbal Analogies",
      
                  content: "Look at the first two words and determine how they are related to each other. Select the word that is related in the same way to the third.​",
                  image: "/quetion/verbalAnalogies.jpg",
                  solveText:
                    "In this question, save and expend are antonyms or opposites of each other (e.g., save energy vs. expend energy). The opposite of ordinary is unique. Hence, the answer is A.",
                },
                {
                  title: "Verbal Classification",
      
                  content: "Look at the top three words and determine how they are similar. In the bottom row, select the fourth word that is most similar to the top three.",
                  image: "/quetion/verbalClassification.jpg",
                  solveText:
                    "In this question, bear, sheep and giraffe are animals. In the answer choices below, bison is the only animal listed. Therefore, the answer is C.",
                },
                {
                  title: " Sentence Completion ",
      
                  content: "Complete the sentence by filling in the blank with the most appropriate word.​",
                  image: "/quetion/sentenceCompletionv3.jpg",
                  solveText:
                    "A gallery is  a place that displays or showcases paintings and other works of art. The answer is E. ​",
                },
              ],
            },
            "Non-Verbal Battery": {
              duration: "35-40 minutes",
              questions: "~ 35-40 questions",
              description:
                "This section measures your child’s ability to solve problems without the use of language, focusing on patterns, shapes, and spatial reasoning.",
              details: [
                {
                  title: " Paper Folding ",
      
                  content: "The question shows a piece of paper that has been folded along the dotted line and then has been cut with a pair of scissors or has had holes punched into it. How will the paper look when it is unfolded?​",
                  image: "/quetion/paperFolding.jpg",
                  solveText:
                    "The correct choice is D.​ The fold line acts like a mirror and each hole on one half of the fold creates a reflection image of the hole on the other half of the fold. So, the holes are reflected diagonally to the other side of the fold line.​",
                },
                {
                  title: " Figure Matrices ",
      
                  content: "Determine the relationship between the top two pictures. Which picture goes best in the empty box with the question mark?​",
                  image: "/quetion/figureMetrices.jpg",
                  solveText:
                    "Look closely at the shapes and colors in the top left box. Compare them with the ones on the right. The outermost shape (octagon) shrinks, changes color and is put inside the triangle. The other shapes also change color. The shapes are also shown as reflections (orientation of the shapes is changed). Similarly, the shapes in the bottom left box would have to change color and orientation, and the outermost shape should be shrunk and placed inside. The answer is C. ​",
                },
                {
                  title: " Figure Classification ",
      
                  content: "Look at the top three pictures and determine how they are similar. In the bottom row, select the picture that is most similar to the top three.",
                  image: "/quetion/figureClassification.jpg",
                  solveText:
                    "Look closely at the shapes in the three boxes at the top. Both shapes have the same number of sides. In the answer choices, only choice A has the same number of sides for both shapes. Therefore, the answer is A. ​",
                },
              ],
            },
            "Quantitative Battery": {
              duration: "40-45 minutes",
              questions: "~ 40-45 questions",
              description:
                "This section measures your child’s mathematical reasoning and problem-solving skills, including their ability to find patterns and understand relationships between numbers. The sections in this battery are:",
              details: [
                {
                  title: " Number Analogies ",
      
                  content: " Look at the first two rows of numbers. Come up with a mathematical relation between the left and right numbers in each row. Use the relation to determine which number goes best with the question mark in the third row.",
                  image: "/quetion/numberAnalogiesQb.jpg",
                  solveText:
                    "In this question, all right-hand side numbers can be obtained by adding 5/4 to the ones on the left-hand side. In the first row, 5 + 5/4 = 25/4. In the second row, 3 + 5/4 = 17/4. So, the answer is 3/4 + 5/4 = 2.",
                },
                {
                  title: " Number Puzzles",
      
                  content: "Which of the choices can replace the question mark to satisfy the inequality below.​",
                  image: "/quetion/numberPuzzle.jpg",
                  solveText:
                    "First let us evaluate the bracket,​ 1=?+7−8​ Let us move 7, −8 from the right-hand side to the left-hand side of the equality by changing their signs.​ 1+8−7=?​ Therefore, ? = 2.",
                },
                {
                  title: " Number Series ",
      
                  content: "Which number should replace the question mark in the sequence?​",
                  image: "/quetion/numberSeriesQb.jpg",
                  solveText:
                    "First let us evaluate the bracket,​ 1=?+7−8​​ Let us move 7, −8 from the right-hand side to the left-hand side of the equality by changing their signs.​ 1+8−7=? ​Therefore, ? = 2."
                },
              ],
            },
      
          },
    };

    const currentTabs = Object.keys(tabContent[activeLevel]);

    const toggleDetail = (index: number): void => {
        setOpenDetailIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Handler for image load
    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>): void => {
        if (e.currentTarget) {
            const { width, height } = e.currentTarget.getBoundingClientRect();
            setImageDimensions({ width, height });
        }
    };

    return (
        <div className="py-5 mt-5">
            {/* Level Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
                {Object.keys(tabContent).map((level) => (
                    <button
                        key={level}
                        className={`btn-level bg-gray-100 ${activeLevel === level ? "active" : ""}`}
                        onClick={() => {
                            setActiveLevel(level);
                            setActiveTab(Object.keys(tabContent[level])[0]);
                            setOpenDetailIndex(null);
                        }}
                    >
                        {level}
                    </button>
                ))}
            </div>

            {/* Tabs */}
            <div className="gap-3 border-b-2 border-gray-300 inline-flex py-2 mb-4 overflow-x-auto overflow-y-hidden text-nowrap">
                {currentTabs.map((tab) => (
                    <button
                        key={tab}
                        className={`level-btn px-3 text-lg ${activeTab === tab ? "active" : "border-none"}`}
                        onClick={() => {
                            setActiveTab(tab);
                            setOpenDetailIndex(null);
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
            >
                {/* Icons */}
                <div className="flex flex-wrap text-gray-600 mb-3 gap-4">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                        <Clock />
                        {tabContent[activeLevel][activeTab].duration}
                    </div>
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                        <FileText />
                        {tabContent[activeLevel][activeTab].questions}
                    </div>
                </div>

                {/* Description */}
                <p className="text-black mb-5">{tabContent[activeLevel][activeTab].description}</p>

                {/* Details */}
                {tabContent[activeLevel][activeTab].details.map((detail, index) => (
                    <motion.div
                        key={index}
                        className="p-3 border border-gray-300 bg-transparent mb-3"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Toggle Title */}
                        <h5
                            className="text-black font-medium flex font-poppins items-center gap-2 cursor-pointer"
                            onClick={() => toggleDetail(index)}
                        >
                            {openDetailIndex === index ? <Minus /> : <Plus />}
                            {detail.title}
                        </h5>

                        {/* Toggle Content */}
                        {openDetailIndex === index && (
                            <div className="mt-3 bg-[#E7F5FD] p-4 rounded-lg">
                                {/* Question Text */}
                                <p className="text-gray-900 text-base mb-2">{detail.content}</p>
                                <p className="text-gray-900 text-base mb-2">
                                    <span className="text-[#E4434B] font-medium mr-5">Question 1</span> {detail.content}
                                </p>

                                {/* Image with Magnifier */}
                                <div
                                    className="flex flex-col md:flex-row justify-between w-full my-4 gap-4"
                                    onMouseEnter={() => setShowMagnifier(true)}
                                    onMouseLeave={() => setShowMagnifier(false)}
                                    onMouseMove={handleMouseMove}
                                >
                                    {/* Image Container */}
                                    <div className="w-full md:w-1/2 relative">
                                        <img
                                            ref={imgRef}
                                            src={detail.image}
                                            alt="Question Example"
                                            width={600}
                                            height={300}
                                            className="rounded-lg w-full h-auto object-cover"
                                            onLoad={handleImageLoad}
                                        />
                                        
                                        {/* Magnifier */}
                                        {showMagnifier && imgRef.current && (
                                            <div
                                                className="border border-secondary rounded-full shadow-lg"
                                                style={{
                                                    position: "absolute",
                                                    top: magnifierPosition.y - 100,
                                                    left: magnifierPosition.x - 100,
                                                    width: "200px",
                                                    height: "200px",
                                                    backgroundImage: `url(${detail.image})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: `${imageDimensions.width * 2}px ${imageDimensions.height * 2}px`,
                                                    backgroundPosition: `-${magnifierPosition.x * 2 - 100}px -${magnifierPosition.y * 2 - 100}px`,
                                                    pointerEvents: "none",
                                                    zIndex: 999,
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Solution Box Container */}
                                    <div className="w-full md:w-1/3">
                                        <div className="bg-yellow-200 p-4 rounded-lg shadow-md h-full">
                                            <h4 className="font-semibold text-2xl text-black mb-2 text-center">How to Solve?</h4>
                                            <p className="text-gray-700 mt-5">{detail.solveText}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default LevelTabs;