"use client";
import { useState, useEffect } from "react";
import styles from "../../../app/styles/components/Modal.module.scss";

export default function Modal({ isOpen, onClose }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("bodyscroll");
        } else {
            document.body.classList.remove("bodyscroll");
        }
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        <div className={`modal_area ${isModalOpen ? "modal_opened" : ""}`}>
            <div className={styles.modal_overlay} onClick={closeModal}>
                <div className={styles.modal_container}>
                    <div className={styles.modal_body} onClick={(e) => e.stopPropagation()}>
                        <h3 className={styles.modal_title}>연락하기</h3>
                        <div className={styles.modal_content}>
                            <div className={styles.row_box_wrap}>
                                <div className={styles.groom_box}>
                                    <div className={styles.row_box}>
                                        <div className={styles.cell_box}>신랑</div>
                                        <div className={styles.cell_box}>이도현</div>
                                        <div className={styles.cell_box}>
                                            <a href="tel:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/call-icon.svg" alt="전화하기" className={styles.call_img} />
                                            </a>
                                            <a href="sms:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/mail-icon.svg" alt="문자하기" className={styles.mail_img} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.row_box}>
                                        <div className={styles.cell_box}>신랑 아버지</div>
                                        <div className={styles.cell_box}>최재만</div>
                                        <div className={styles.cell_box}>
                                            <a href="tel:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/call-icon.svg" alt="전화하기" className={styles.call_img} />
                                            </a>
                                            <a href="sms:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/mail-icon.svg" alt="문자하기" className={styles.mail_img} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.row_box}>
                                        <div className={styles.cell_box}>신랑 어머니</div>
                                        <div className={styles.cell_box}>서미숙</div>
                                        <div className={styles.cell_box}>
                                            <a href="tel:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/call-icon.svg" alt="전화하기" className={styles.call_img} />
                                            </a>
                                            <a href="sms:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/mail-icon.svg" alt="문자하기" className={styles.mail_img} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.bride_box}>
                                    <div className={styles.row_box}>
                                        <div className={styles.cell_box}>신부</div>
                                        <div className={styles.cell_box}>김하나</div>
                                        <div className={styles.cell_box}>
                                            <a href="tel:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/call-icon.svg" alt="전화하기" className={styles.call_img} />
                                            </a>
                                            <a href="sms:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/mail-icon.svg" alt="문자하기" className={styles.mail_img} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.row_box}>
                                        <div className={styles.cell_box}>신부 아버지</div>
                                        <div className={styles.cell_box}>이승태</div>
                                        <div className={styles.cell_box}>
                                            <a href="tel:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/call-icon.svg" alt="전화하기" className={styles.call_img} />
                                            </a>
                                            <a href="sms:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/mail-icon.svg" alt="문자하기" className={styles.mail_img} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.row_box}>
                                        <div className={styles.cell_box}>신부 어머니</div>
                                        <div className={styles.cell_box}>정선화</div>
                                        <div className={styles.cell_box}>
                                            <a href="tel:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/call-icon.svg" alt="전화하기" className={styles.call_img} />
                                            </a>
                                            <a href="sms:010-0000-0000" className={styles.icon_box}>
                                                <img src="./img/mail-icon.svg" alt="문자하기" className={styles.mail_img} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={styles.btn_modal_close} onClick={closeModal}>
                            <span className="sr_hidden">닫기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
