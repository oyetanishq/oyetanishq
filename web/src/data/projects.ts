import type { Content } from "@/pages/minimal/projects/project";

import broser_linux_image from "/images/projects/browser-linux.png";
import cat_dog_image from "/images/projects/cat-dog.png";
import ciphering_image from "/images/projects/ciphering.png";
import hackpad_image from "/images/projects/hackpad.png";
import nodus_image from "/images/projects/nodus.png";
import deepdreamer_image from "/images/projects/deepdreamer.png";
import readme_chess_image from "/images/projects/readme-chess.png";
import sql_in_web_image from "/images/projects/sql-in-web.png";
import tetris_image from "/images/projects/tetris.png";
import unifier_image from "/images/projects/unifier.png";
import mazex_image from "/images/projects/mazex.jpg";
import nanojs_image from "/images/projects/nanojs.png";

export const projects: Content[] = [
    {
        title: "deepdreamer",
        description: "A stock analysis and trading simulator, letting you backtest custom strategies and track markets risk-free.",
        technologies: "react, aws api gateway, lambda, dybamodb, monaco, sam, tailwindcss, typescript.",
        date: new Date(2025, 10),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/deepdreamer",
            },
            live: {
                name: "live",
                link: "https://deepdreamer.tanishqsingh.com",
            },
        },
        image: {
            src: deepdreamer_image,
            alt: "this is the working demo of deepdreamer, a algorithmic trading app.",
        },
    },
    {
        title: "nodus",
        description: "A simple webrtc based peer to peer video conferencing and file sharing app, with unlimited file size and no server storage.",
        technologies: "react, golang, sqlite, docker, webrtc, tailwindcss, typescript.",
        date: new Date(2025, 5),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/nodus",
            },
            live: {
                name: "live",
                link: "https://nodus.tanishqsingh.com",
            },
        },
        image: {
            src: nodus_image,
            alt: "this is the working demo of nodus, a video conferencing / file sharing app.",
        },
    },
    {
        title: "hackpad",
        description: "Real time collaborative editor with features including syntax highlighting, auto completion, chat, private, and public rooms.",
        technologies: "react, nodejs, express, deno, mongodb, monaco, tailwindcss, typescript.",
        date: new Date(2025, 1),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/hackpad",
            },
            live: {
                name: "live",
                link: "https://hackpad.vercel.app",
            },
        },
        image: {
            src: hackpad_image,
            alt: "this is the working demo of hackpad, a collaborative text editor.",
        },
    },
    {
        title: "sql in web",
        description:
            "Browser based sql editor with syntax highlighting, auto completion, and a simple interface to run and store multiple sql queries on a sqlite database locally. Whole webapp is loaded under 1MB, and works on any device.",
        technologies: "react, sqlite, react-simple-code-editor, prismjs, tailwindcss, typescript.",
        date: new Date(2025, 3),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/sql-in-web",
            },
            live: {
                name: "live",
                link: "https://sql-in-web.tanishqsingh.com",
            },
        },
        image: {
            src: sql_in_web_image,
            alt: "this is the working demo of sql in web, a browser based sql editor.",
        },
    },
    {
        title: "browser linux",
        description:
            "Serverless linux environment running fully in client side, you can create file/folders, run commands, execute bash scripts, and more. Can instantly be resumed on page reload because of state preservation in broser storage every 10SEC.",
        technologies: "react, copy/v86, xtermjs, tailwindcss, typescript.",
        date: new Date(2024, 11),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/browser-linux",
            },
            live: {
                name: "live",
                link: "https://browser-linux.tanishqsingh.com",
            },
        },
        image: {
            src: broser_linux_image,
            alt: "this is the working demo of browser linux, a serverless linux environment running fully in client side.",
        },
    },
    {
        title: "cat dog classifier",
        description: "Fined tuned mobile net model to classify images of cats and dogs with over 0.99 accuracy, with a web interface to upload images and get predictions.",
        technologies: "react, tensorflow, keras, docker, tailwindcss, typescript.",
        date: new Date(2025, 5),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/cat-dog-classifier",
            },
            live: {
                name: "live",
                link: "https://cat-dog.tanishqsingh.com",
            },
        },
        image: {
            src: cat_dog_image,
            alt: "this is the working demo of cat dog classifier, a machine learning model to classify images of cats and dogs.",
        },
    },
    {
        title: "readme chess",
        description:
            "A chess game that can be played in the readme of a github repository, when you create a issue it triggers a github action that updates the readme with the current state of the game, stockfish is our opponent.",
        technologies: "ci/cd workflow, python, jq, bash scripting.",
        date: new Date(2024, 7),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/readme-chess",
            },
            live: {
                name: "live",
                link: "https://github.com/oyetanishq/readme-chess",
            },
        },
        image: {
            src: readme_chess_image,
            alt: "this is the working demo of readme chess, a chess game that can be played in the readme of a github repository.",
        },
    },
    {
        title: "ciphering",
        description: "Node.js package to encrypt and decrypt text using AES-256 algorithm.",
        technologies: "typescript, nodejs, crypto.",
        date: new Date(2022, 9),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/ciphering",
            },
            live: {
                name: "live",
                link: "https://www.npmjs.com/package/ciphering",
            },
        },
        image: {
            src: ciphering_image,
            alt: "this is the working demo of ciphering, a node.js package to encrypt and decrypt text using AES-256 algorithm.",
        },
    },
    {
        title: "nanojs",
        description:
            "A secure library to manage nano currency, with features like handling accounts, transactions, wallet, conversion, and blocks. It is built on top of the nano protocol and provides a simple interface to interact with the nano network.",
        technologies: "typescript, deno, nano.",
        date: new Date(2023, 1),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/nanojs",
            },
            live: {
                name: "live",
                link: "https://deno.land/x/nanojs",
            },
        },
        image: {
            src: nanojs_image,
            alt: "this is the working demo of nanojs, a secure library to manage nano currency.",
        },
    },
    {
        title: "800kebaklol (mazex IIT BHU'24)",
        description:
            "This robot is designed to naviagate through a maze autonomously using IR while avoiding any obstacles in path using ultrasonic sensors. After reaching the end, it returns to the starting point with shortest route. This made under 5 in more than 120 teams.",
        technologies: "cpp, ir sensor, ultrasonic sensor, motor driver, arduino.",
        date: new Date(2024, 10),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/800kebaklol",
            },
            live: {
                name: "videos",
                link: "https://github.com/oyetanishq/800kebaklol/?tab=readme-ov-file#demo",
            },
        },
        image: {
            src: mazex_image,
            alt: "this is the working demo of 800kebaklol, a robot designed to navigate through a maze autonomously using IR while avoiding any obstacles in path using ultrasonic sensors.",
        },
    },
    {
        title: "tetris in cpp",
        description: "Terminal based tetris game implemented in C++, with a simple interface to play the game, dynamic speed, and a scoring system.",
        technologies: "cpp.",
        date: new Date(2025, 0),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/tetris",
            },
            live: {
                name: "live",
                link: "https://github.com/oyetanishq/tetris",
            },
        },
        image: {
            src: tetris_image,
            alt: "this is the working demo of tetris in cpp, a terminal based tetris game implemented in C++.",
        },
    },
    {
        title: "unifier",
        description: "A terminal based password managing app, with features like authenticated login, password encryption, import/export to csv, and a simple interface to get you started.",
        technologies: "python, mysql, bycrypt, cryptocode.",
        date: new Date(2022, 11),
        links: {
            code: {
                name: "code",
                link: "https://github.com/oyetanishq/unifier",
            },
            live: {
                name: "live",
                link: "https://github.com/oyetanishq/unifier",
            },
        },
        image: {
            src: unifier_image,
            alt: "this is the working demo of unifier, a terminal based password managing app.",
        },
    },
];
