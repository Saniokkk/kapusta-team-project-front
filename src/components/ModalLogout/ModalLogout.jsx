import { createPortal } from "react-dom";
import s from "./ModalLogout.module.css";
import Sprite from "../../assets/symbol-icons.svg";

export default function ModalLogout({
    title = 'You really want out?',
    onClickYes,
    onClickNo,
}) {

    return createPortal(
        <div className={s.backdrop}>
            <div className={s.modal}>
                <button className={s.outBtn} onClick={onClickNo} type="button">
                    <svg className={s.outIcon} width="12" height="12">
                        <use href={`${Sprite}#icon-close`}></use>
                    </svg>
                </button>
                <p className={s.title}>{title}</p>
                <div className={s.btnsBox}>
                    <button
                        className={s.confirmBtnYes}
                        onClick={onClickYes}
                        type="button"
                    >
                        Yes
                    </button>
                    <button className={s.confirmBtnNo} onClick={onClickNo} type="button">
                        No
                    </button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal-root')
    );
}