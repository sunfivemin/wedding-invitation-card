"use client";
import { useState, useEffect } from "react";
import bgmSound from "../../../../public/sounds/bgm.mp3";
import playIcon from "../../../../public/sounds/sound-on.svg";
import pauseIcon from "../../../../public/sounds/sound-off.svg";

export default function Sound() {
    const [bgm, setBgm] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Audio) {
            setBgm(new Audio(bgmSound));
        }
    }, []);

    const bgmSoundHandler = () => {
        if (bgm) {
            if (isPlaying) {
                bgm.pause();
            } else {
                bgm.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        return () => {
            if (bgm) {
                bgm.pause();
            }
        };
    }, [bgm]);

    return (
        <div className="bgm_btn_container">
            {bgm && (
                <button onClick={bgmSoundHandler} className="bgm_btn">
                    <img src={isPlaying ? playIcon : pauseIcon} alt={isPlaying ? "일시 중지" : "재생"} />
                </button>
            )}
        </div>
    );
}
