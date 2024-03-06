// import Image from "next/image";
// import next from '!/public/next.svg'
// import styles from "./page.module.css";
"use client";
import "./styles/main.scss";
import styles from "./styles/layout/Nav.module.scss";
import Link from "next/link";
import { React, useState } from "react";

export default function Home() {
    // let cardItem = ["청첩장", "부고장", "초대장"];
    // const items = [1, 2, 3, 4, 5];
    const categories = ["청첩장", "부고장", "초대장"];
    const projects = [
        {
            dataType: "청첩장",
            href: "/wedding",
            imgSrc: "/vercel.svg",
            title: "청첩장 샘플 01",
        },
        {
            dataType: "부고장",
            href: "/obituary",
            imgSrc: "/vercel.svg",
            title: "부고장 샘플 01",
        },
        {
            dataType: "초대장",
            href: "/invitation",
            imgSrc: "/vercel.svg",
            title: "초대장 샘플 01",
        },
    ];

    const [activeTab, setActiveTab] = useState(categories[0]);
    const filteredProjects = projects.filter((project) => project.dataType === activeTab);

    const handleTabClick = (project) => {
        setActiveTab(project);
    };

    return (
        <main className={styles.nav_area}>
            <ul className="categories">
                {categories.map((category, idx) => {
                    return (
                        <li className={`${activeTab === category ? "active" : ""}`} onClick={() => handleTabClick(category)} key={idx}>
                            <button className="category_btn">{category}</button>
                        </li>
                    );
                })}
            </ul>
            <ul className="projects">
                {filteredProjects.map((project) => {
                    return (
                        <li className="project" key={project.title} data-type={project.dataType}>
                            <Link href={project.href}>
                                <img src={project.imgSrc} alt={project.title} className="project_img" />
                                <h2 className="project_title">{project.title}</h2>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {/* <div className="navbar">
                <Link href="/wedding">청첩장</Link>
                <Link href="/obituary">부고장</Link>
                <Link href="/invitation">초대장</Link>
            </div> 
             {cardItem.map((card, i) => {
                return (
                    <div className="card_item" key={i}>
                        <img src={`/next.svg`} alt={card} className="card_img" />
                        <h4>{card}</h4>
                    </div>
                );
            })}

            <Item item={cardItem[0]} />
            <Item item={cardItem[1]} />
            <Item item={cardItem[2]} /> */}
        </main>
    );
}

function Item(props) {
    return (
        <div className="item">
            <p>아이템: {props.item}</p>
        </div>
    );
}
