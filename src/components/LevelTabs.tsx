import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaMinus, FaPlus } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import Image from "next/image";
// Define TypeScript Interfaces
interface Detail {
    title: string;
    content: string;
    image: string;
    solveText: string;
    contentHeadind: string;
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

const LevelTabs: React.FC = () => {
    const [activeLevel, setActiveLevel] = useState<string>("Level K–2");
    const [activeTab, setActiveTab] = useState<string>("Verbal Battery");
    // const [openDetails, setOpenDetails] = useState<number[]>([]);
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
                        contentHeadind: " Questions focus on finding relationships between pairs of pictures. See the example below:",
                        content: "Determine the mathematical relationship between the top two pictures, which picture goes best in the empty box?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, the donkey and the zebra in the top two boxes both belong to the equestrian (horse) family. Of all the answer choices, only the cheetah is similarly in the same family as the tiger (cat). Hence, D is the correct answer.",
                    },
                    {
                        title: "  Picture Classification  ",
                        contentHeadind: "These types of questions test how your child classifies pictures of everyday things",
                        content: "Determine the mathematical relationship between the top two pictures, which picture goes best in the empty box?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, the three pictures at the top are of musical instruments, but more specifically, they are string instruments. In the answer choices below, the piano and guitar are the only instruments clearly shown by themselves. However, since the guitar is the only string instrument, the answer is E.",
                    },
                    {
                        title: " Sentence Completion ",
                        contentHeadind: "Here, your child will choose a picture that best answers an audio question",
                        content: "Determine the mathematical relationship between the top two pictures, which picture goes best in the empty box?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, your child will have to pay attention and understand the question being asked. The response would answer the question clearly - I will not wear a boat in the snow. It tests your child’s understanding of the question “wear” which could be confused with “where” or not heard or understood properly.",
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
                        contentHeadind: "These questions test your child’s ability to visualize how a piece of paper will look when it is folded and a pattern cut out of it, and then unfolded. See example below:",
                        content: "The question shows a piece of paper that has been folded along the dotted line and then has been cut with a pair of seissors or has had holes punched into it. How will the paper look when it is unfolded?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, the paper is folded upward in half and two holes are punched in it. When the paper is unfolded again, what pattern of punched holes emerges? Since the locations of the holes at the top and bottom must match, the answer is C.",
                    },
                    {
                        title: " Figure Matrices ",
                        contentHeadind: "Here, the question is about choosing the correct shape to complete a 2x2 matrix. It requires the ability to understand patterns and figure out relationships. See example below:",
                        content: "Determine the relationship between the top two pictures. Which picture goes best in the empty box with the question mark?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "Look at the picture in the top left box. The arrow at the top points upwards and the dot at the end of the line is at the bottom. In the box on the right, it is the opposite - the arrow is pointing downward and the dot is at the top. In the bottom left box, the lines are at the top of the circle. The answer",
                    },
                    {
                        title: " Figure Classification ",
                        contentHeadind: "Similar to picture/verbal classification, but with shapes or figures. The goal is to group shapes based on common attributes. See example below:",
                        content: "Look at the top three picture and determine how they are similar. In the bottom row, select the picture that is most similar to the top three.",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, the three figures at the top are all circles, with a single, straight arrow attached to them (backwards or forwards). Of the answer choices, A and D seem more likely because they also have circles. However, A does not have an arrow attached, hence, D is the correct answer.",
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
                        contentHeadind: "Similar to verbal analogies, but with numbers. Questions are about finding the relationship between number pairs. See the example below:",
                        content: "Determine the mathematical relationship between the top two pictures, Which picture goes best in the empty box with the question mark?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, the number of green sweaters decreases from 7 in the left box to 6 in the right box (-1). Similarly, there are 6 chimpanzees in the bottom left box, so there should be 5 chimpanzees in the bottom right box (-1). Hence, the answer is E.",
                    },
                    {
                        title: " Number Puzzles",
                        contentHeadind: "This section assesses your child's ability to understand and use language. It includes tasks like sentence completion, verbal analogies, and vocabulary. For children in Kindergarten up to Grade 2, this battery (or section) is picture-based and tests your child’s ability to identify the relationships between the pictures in different ways.",
                        content: "Determine the mathematical relationship between the top two pictures, Which picture goes best in the empty box with the question mark?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, the donkey and the zebra both belong to the equestrian (horse) family. Of all the answer choices, only the cheetah is in the same family as the tiger. Hence, D is the correct answer.",
                    },
                    {
                        title: " Number Series ",
                        contentHeadind: "The goal is to identify the next number in a sequence, by identifying any patterns in that sequence. See the example below:",
                        content: "What picture should replace the question mark in the sequence?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, there is an alternating pattern — the beads in both the even numbered rows and the odd numbered rows are increasing by one each time. So, the number of beads in rows 1,3,5 and 7 are 2, 3, 4, 5. For the even numbered rows 2, 4, 6, 8, the beads go up as follows - 6, 7, 8, 9. Since the question is for the odd numbered row 5, the answer is C.",
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
                        contentHeadind: "Questions focus on finding relationships between pairs of pictures. See the example below:",
                        content: "Determine the mathematical relationship between the top two pictures, Which picture goes best in the empty box with the question mark?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, the words “deer” and “reed” have different meanings, but if you look closely, you’ll see that they have the same letters, with the first and last letters being swapped. For the word “draw,” the answer choice “ward” is correct because it has the same letters in reverse.",
                    },
                    {
                        title: "Verbal Classification",
                        contentHeadind: "These types of questions test how your child classifies pictures of everyday things",
                        content: "Look at the top three picture and determine how they similar. In the bottom row, select the picture that is most similar to the top three:",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, honeybee and ladybird are both insects. In the answer choices below, the only accurate answer is “ant” since ant is an insect. Cocoon, beehive and anthill may be close. However, honeybee and ladybird are singular and so is ant, hence, ant is the correct answer.",
                    },
                    {
                        title: " Sentence Completion ",
                        contentHeadind: "Here, your child will choose a picture that best answers an audio question",
                        content: "Determine the mathematical relationship between the top two pictures, which picture goes best in the empty box?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In In this question, the three pictures at the top are of musical instruments, but more specifically, they are string instruments. In the answer choices below, the piano and guitar are the only instruments clearly shown by themselves. However, since the guitar is the only string instrument, the answer is E.",
                    },
                ],
            },
            "Non-Verbal Battery": {
                duration: "40-45 minutes",
                questions: "~ 40-45 questions",
                description:
                    "This section measures your child’s ability to solve problems without the use of language, focusing on patterns, shapes, and spatial reasoning.",
                details: [
                    {
                        title: " Paper Folding ",
                        contentHeadind: "This section assesses your child's ability to understand and use language. It includes tasks like sentence completion, verbal analogies, and vocabulary. For children in Kindergarten up to Grade 2, this battery (or section) is picture-based and tests your child’s ability to identify the relationships between the pictures in different ways.",
                        content: "Determine the mathematical relationship between the top two pictures, Which picture goes best in the empty box with the question mark?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In In this question, the words “deer” and “reed” have different meanings, but if you look closely, you’ll see that they have the same letters, with the first and last letters being swapped. For the word “draw,” the answer choice “ward” is correct because it has the same letters in reverse.",
                    },
                    {
                        title: " Figure Matrices ",
                        contentHeadind: "This section assesses your child's ability to understand and use language. It includes tasks like sentence completion, verbal analogies, and vocabulary. For children in Kindergarten up to Grade 2, this battery (or section) is picture-based and tests your child’s ability to identify the relationships between the pictures in different ways.",
                        content: "Determine the mathematical relationship between the top two pictures, Which picture goes best in the empty box with the question mark?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In In this question, the words “deer” and “reed” have different meanings, but if you look closely, you’ll see that they have the same letters, with the first and last letters being swapped. For the word “draw,” the answer choice “ward” is correct because it has the same letters in reverse.",
                    },
                    {
                        title: " Figure Classification ",
                        contentHeadind: "This section assesses your child's ability to understand and use language. It includes tasks like sentence completion, verbal analogies, and vocabulary. For children in Kindergarten up to Grade 2, this battery (or section) is picture-based and tests your child’s ability to identify the relationships between the pictures in different ways.",
                        content: "Determine the mathematical relationship between the top two pictures, Which picture goes best in the empty box with the question mark?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In In this question, the words “deer” and “reed” have different meanings, but if you look closely, you’ll see that they have the same letters, with the first and last letters being swapped. For the word “draw,” the answer choice “ward” is correct because it has the same letters in reverse.",
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
                        contentHeadind: "Similar to verbal analogies, but with numbers. Questions are about finding the relationship between number pairs. See the example below:",
                        content: "Determine the mathematical relationship between the top two pictures, Which picture goes best in the empty box with the question mark?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, the number of green sweaters decreases from 7 in the left box to 6 in the right box (-1). Similarly, there are 6 chimpanzees in the bottom left box, so there should be 5 chimpanzees in the bottom right box (-1). Hence, the answer is E.",
                    },
                    {
                        title: " Number Puzzles",
                        contentHeadind: "Involves solving simple math problems about equivalence or identifying patterns. See the example below:",
                        content: "If both trains are carrying the same number of bananas then what should replace the question mark?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, there are a total of 8 bananas in each box on the train. All 8 bananas need to be in just one box. Hence, the answer is B.",
                    },
                    {
                        title: " Number Series ",
                        contentHeadind: "The goal is to identify the next number in a sequence, by identifying any patterns in that sequence. See the example below:",
                        content: "What picture should replace the question mark in the sequence?",
                        image: "/cogatImage/puzzle.png",
                        solveText:
                            "In this question, there is an alternating pattern — the beads in both the even numbered rows and the odd numbered rows are increasing by one each time. So, the number of beads in rows 1,3,5 and 7 are 2, 3, 4, 5. For the even numbered rows 2, 4, 6, 8, the beads go up as follows - 6, 7, 8, 9. Since the question is for the odd numbered row 5, the answer is C.",
                    },
                ],
            },

        },
    };

    const currentTabs = Object.keys(tabContent[activeLevel]);

    const toggleDetail = (index: number): void => {
        setOpenDetailIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="container mx-auto py-5 mt-5 px-4">
            {/* Level Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
                {Object.keys(tabContent).map((level) => (
                    <button
                        key={level}
                        className={`btn-level bg-gray-100  ${activeLevel === level ? "active" : ""
                            }`}
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
            <div className="flex flex-wrap gap-3 border-b border-gray-300 py-2 mb-4">
                {currentTabs.map((tab) => (
                    <button
                        key={tab}
                        className={`level-btn px-3 
            ${activeTab === tab ? "active" : "border-none"}`}
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
                        <FaClock />
                        {tabContent[activeLevel][activeTab].duration}
                    </div>
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                        <TiDocumentText />
                        {tabContent[activeLevel][activeTab].questions}
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-800">{tabContent[activeLevel][activeTab].description}</p>

                {/* Details */}
                {tabContent[activeLevel][activeTab].details.map((detail, index) => (
                    <motion.div
                        key={index}
                        className="p-4 border border-gray-300 rounded-lg shadow-md mt-4 bg-white"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Toggle Title */}
                        <h5
                            className="text-red-600 font-semibold flex items-center gap-2 cursor-pointer"
                            onClick={() => toggleDetail(index)}
                        >
                              {openDetailIndex === index ? <FaMinus /> : <FaPlus />}
                            {detail.title}
                        </h5>

                        {/* Toggle Content */}
                        {openDetailIndex === index && (
                            <div className="mt-3 bg-[#E7F5FD] p-4 rounded-lg">
                                {/* Question Text */}
                                <p className="text-gray-900  text-base mb-2" >{detail.contentHeadind}</p>
                                <p className="text-gray-900  text-base mb-2"> <span className="text-red-500 font-medium mr-5">Question 1</span> {detail.content}</p>

                                {/* Image */}
                                <div className="flex flex-col md:flex-row justify-between w-full my-4 gap-4">
                                    {/* Image Container */}
                                    <div className="w-full md:w-1/2">
                                        <Image
                                            src={detail.image}
                                            alt="Question Example"
                                            width={600}
                                            height={300}
                                            className="rounded-lg w-full h-auto object-cover" // Ensure the image is responsive and covers the area
                                        />
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
