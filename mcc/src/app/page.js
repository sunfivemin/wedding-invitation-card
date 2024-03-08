"use client";
import "./styles/main.scss";
// import Image from "next/image";
import styles from "./styles/layout/Nav.module.scss";
import Link from "next/link";
import { React, useState } from "react";

export default function Home() {
    const categories = ["청첩장", "부고장", "초대장"];
    const projects = [
        {
            dataType: "청첩장",
            href: "/wedding",
            imgSrc: "./img/ecf.jpg",
            title: "청첩장 샘플 01",
        },
        {
            dataType: "청첩장",
            href: "/wedding/wedding-01",
            imgSrc: "./img/ecf.jpg",
            title: "청첩장 샘플 02",
        },
        {
            dataType: "청첩장",
            href: "/wedding/wedding-02",
            imgSrc: "./img/ecf.jpg",
            title: "청첩장 샘플 03",
        },
        {
            dataType: "부고장",
            href: "/obituary",
            imgSrc: "./img/ecf.jpg",
            title: "부고장 샘플 01",
        },
        {
            dataType: "초대장",
            href: "/invitation",
            imgSrc: "./img/ecf.jpg",
            title: "초대장 샘플 01",
        },
    ];

    const [activeTab, setActiveTab] = useState(categories[0]);
    const [animating, setAnimating] = useState(false);
    const filteredProjects = projects.filter((project) => project.dataType === activeTab);

    const handleTabClick = (category) => {
        setAnimating(true);
        setActiveTab(category);
        setTimeout(() => {
            setAnimating(false);
        }, 250);
    };

    return (
        <main className={styles.nav_area}>
            <ul className={styles.categories}>
                {categories.map((category, idx) => {
                    return (
                        <li className={`${activeTab === category ? "selected" : ""}`} onClick={() => handleTabClick(category)} key={idx}>
                            <button className="category_btn">{category}</button>
                        </li>
                    );
                })}
            </ul>
            <ul className={`${styles.projects} ${animating ? styles["anim-out"] : ""}`}>
                {filteredProjects.map((project) => {
                    return (
                        <li className={styles.project} key={project.title} data-type={project.dataType}>
                            <Link href={project.href}>
                                <img src={project.imgSrc} alt={project.title} className="project_img" />
                                <h2 className={styles.project_title}>{project.title}</h2>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
