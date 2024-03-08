"use client";
import { useState, useEffect } from "react";
import "../styles/main.scss";
import styles from "../styles/layout/Wedding.module.scss";
import React from "react";
// import Snow from './components/Snow';
import PetalCanvas from "./components/Flower";
import Sound from "./components/Sound";
import Modal from "./components/Modal";
import Image from "next/image";

export default function Wedding() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContactClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main className={styles.layout}>
            <div className="mcc_view_area">
                <section className="canvas_wrap">
                    <div className={styles.main_area}>
                        <Sound>PLAY</Sound>
                        <div className={styles.top_info_area}>
                            <p className={styles.bride_name}>김채연</p>
                            <div className={styles.wedding_day_con}>
                                <span className={styles.wedding_month}>04</span>
                                <hr className={styles.wedding_hr} />
                                <span className={styles.wedding_day}>06</span>
                            </div>
                            <p className={styles.groom_name}>이성훈</p>
                        </div>
                        <img src="./img/wedding-main-img.jpeg" alt="결혼식 주인공" className="wedding_main_img" />
                        <div className={styles.petal_wrap}>
                            <PetalCanvas />
                        </div>
                    </div>
                </section>
                <div className={styles.info_txt_area}>
                    <p>2024년 4월 06일 토요일 오후 1시</p>
                    <p>서울 신라호텔 2층 다이너스티홀</p>
                </div>
                <section className={styles.editor_section_poetry}>
                    <img src="./img/flower-01.png" alt="꽃장식 이미지" className={styles.flower_img} />
                    <div className={styles.section_paragraph_area}>
                        <div className={styles.section_paragraph}>
                            <p>내가 당신을 사랑하는 것은</p>
                            <p>까닭이 없는 것이 아닙니다.</p>
                        </div>
                        <div className={styles.section_paragraph}>
                            <p>다른 사람들은 나의 홍안만을</p>
                            <p>사랑하지마는</p>
                        </div>
                        <div className={styles.section_paragraph}>
                            <p>당신은 나의 백발도</p>
                            <p>사랑하는 까닭입니다.</p>
                        </div>
                        <div className={styles.section_paragraph}>
                            <p>한용운 &lt;사랑하는 까닭&gt;</p>
                        </div>
                    </div>
                </section>
                <section className={styles.editor_section_invitation}>
                    <div className={styles.subtitle}>Invite you</div>
                    <div className={styles.invitation_content}>
                        <div className={styles.section_paragraph}>
                            <p>저희 두 사람이</p>
                            <p>평생을 함께하기 위해</p>
                            <p>서로의 반려자가 되려 합니다.</p>
                        </div>
                        <div className={styles.section_paragraph}>
                            <p>그 진실한 서약을 하는 자리에</p>
                            <p>소중한 분들을 모십니다.</p>
                        </div>
                        <div className={styles.section_paragraph}>
                            <p>자리하시어 축복해 주시면</p>
                            <p>대단히 감사하겠습니다.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.editor_section_picture}>
                    <img src="./img/wedding-sub-img.jpeg" draggable="false" />
                </section>
                <section className={styles.editor_section_family}>
                    <div className={styles.family_area}>
                        <div className={styles.family_name}>
                            <strong>최재만</strong>
                        </div>
                        <span>·</span>
                        <div className={styles.family_name}>
                            <strong>서미숙</strong>
                        </div>
                        <p>의</p>
                        <p className={styles.family_text}>아들</p>
                        <strong className={styles.family_name}>도현</strong>
                    </div>
                    <div className={styles.family_area}>
                        <div className={styles.family_name}>
                            <strong>이승태</strong>
                        </div>
                        <span>·</span>
                        <div className={styles.family_name}>
                            <strong>정선화</strong>
                        </div>
                        <p>의</p>
                        <p className={styles.family_text}>딸</p>
                        <strong className={styles.family_name}>하나</strong>
                    </div>
                </section>
                <section className={styles.editor_section_contact}>
                    <button className={styles.contact_button} onClick={handleContactClick}>
                        연락하기
                    </button>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} onContactClick={handleContactClick}></Modal>
                </section>
                <section className={styles.editor_section_calendar}>
                    <div className={styles.subtitle}>Calendar</div>
                    <div className={styles.calendar_main_info}>
                        <div className={styles.calendar_date}>2024.4.06</div>
                        <div className={styles.calendar_hours}>토요일 오후 1시 30분</div>
                    </div>
                    <div className={styles.calendar_area}>
                        <table className={styles.calendar_table}>
                            <thead className={styles.calendar_thead}>
                                <tr className={styles.calendar_th_row}>
                                    <th className={styles.calendar_th_cell}>일</th>
                                    <th className={styles.calendar_th_cell}>월</th>
                                    <th className={styles.calendar_th_cell}>화</th>
                                    <th className={styles.calendar_th_cell}>수</th>
                                    <th className={styles.calendar_th_cell}>목</th>
                                    <th className={styles.calendar_th_cell}>금</th>
                                    <th className={styles.calendar_th_cell}>토</th>
                                </tr>
                            </thead>
                            <tbody className={styles.calendar_tbody}>
                                <tr className={styles.calendar_day_row}>
                                    <td className={styles.calendar_day_cell}></td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>1</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>2</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>3</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>4</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>5</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>6</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>7</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>8</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>9</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>10</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>11</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>12</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>13</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>14</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>15</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>16</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>17</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>18</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>19</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>20</td>
                                </tr>         
                                <tr>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>21</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>22</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>23</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>24</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>25</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>26</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>27</td>
                                </tr>       
                                <tr>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>28</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>29</td>
                                    <td className={`${styles.calendar_day_cell} ${styles.day_on}`}>30</td>
                                    <td className={styles.calendar_day_cell}></td>
                                    <td className={styles.calendar_day_cell}></td>
                                    <td className={styles.calendar_day_cell}></td>
                                    <td className={styles.calendar_day_cell}></td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}
