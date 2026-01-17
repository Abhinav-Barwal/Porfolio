"use client";
import { useState, useEffect } from "react";
import Popup from "./Popup";
type FieldName = "name" | "email" | "number" | "message";

export default function Contact() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [popupType, setPopupType] = useState<"success" | "error">("success");
    const [focusedInput, setFocusedInput] = useState<Record<FieldName, boolean>>({
        name: false,
        email: false,
        number: false,
        message: false,
    });
    const [values, setValues] = useState<Record<FieldName, string>>({
        name: "",
        email: "",
        number: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleFocus = (field: FieldName) => {
        setFocusedInput((prev) => ({ ...prev, [field]: true }));
    };
    const handleBlur = (field: FieldName) => {
        if (values[field] === "") {
          setFocusedInput((prev) => ({ ...prev, [field]: false }));
        }
    };
    const handleChange = (field: FieldName, value: string) => {
        setValues((prev) => ({ ...prev, [field]: value }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                name: values.name,
                email: values.email,
                number: values.number,
                message: values.message,
                }),
            });
            if (!res.ok) {
                throw new Error("Failed to send message");
            }
            setPopupMessage("Message sent successfully");
            setPopupType("success");
            setShowPopup(true);
            setValues({
                name: "",
                email: "",
                number: "",
                message: "",
            });
            setFocusedInput({
                name: false,
                email: false,
                number: false,
                message: false,
            });
        } catch (error) {
            console.error(error);
            setPopupMessage("Network error. Please try again.");
            setShowPopup(true);
            setPopupType("error");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showPopup]);
    return (
        <section id="contact">
            <div className="container">
                <div className="title">
                    <h2>CONTACT</h2>
                </div>
                <p className="about-info">I’m always open to discussing new projects, creative ideas, or opportunities to collaborate. If you have a question, want to work together, or simply want to connect, feel free to reach out.</p>
                <div className="seperator">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="170" height="12" viewBox="0 0 170 12" fill="none">
                    <rect width="170" height="12" fill="url(#pattern0_2_335)"/>
                    <defs>
                    <pattern id="pattern0_2_335" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_2_335" transform="scale(0.00588235 0.0833333)"/>
                    </pattern>
                    <image id="image0_2_335" width="170" height="12" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAMCAYAAADyMyZxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERGOUZCMTkxNUEzMTFFNDgzOEZCNTFFNTNBOUQ0NTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERGOUZCMTgxNUEzMTFFNDgzOEZCNTFFNTNBOUQ0NTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4MDgzRTI5QjZFREE2OEQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4MDgzRTI5QjZFREE2OEQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0543MwAAAuxJREFUeNrsmVuITVEYx/e4XwrjmBljGrfJMCbJJZ0cpKHcXiiah2ki5FkSkhLywINIEkVIUcotuY94oYmQ6wi5Ny7JMWPcx/H/8p36+lrrrDnnbdn7q1/NmvPb++w96z9rrb12EISj4uAi6OXwysAVMMDhFYA6MCrH6+kJzoGJDq8TOAzmObw8sA0sD6LytsaDJEiBGyDf4g0Br9h7BgZmCOkd9j6CMTmE9Bof/wVMyhDSo+z9BtUZQrqdPWJF1OV+1lTQIjryJogZvJHgvfCeg0EGrxQ8Ed4nMDaLkNaLY7+DGZaQHhfeH7DEEtIdwiM2Rl3ub1WpsN4CfQzeCBXWF2CwwSsBj4RHI/Y4xzXQsuO6OOYbmG4J6UkV0sWWkO5UId0QdbX/NVmF9TZP47oqwTvhveS1q65+oEGFNW757nxedqTdr2CaJaSnhNcKFlpCukuFdN3/3Hl5linFl/oJ9mXh03rwNOjO7btgCvigvOHgEiji9mselR8rr5i9Ydz+DGaCq8LpDS6A0dymkM4B59W5uoBjYpSlkC4C+w19tluNsmvBese9L+B/BG8r5THJHO6XnrSbxTnugUKDVwEahUdhLTd4fcED4VFYE/xZjNfE6c9aeM2sqys4Kzx6eKo1eO3AHvU3WNPG+0563tehCyrVBNAkznNfjJ6yaKR8Izz6eajBK+JzpD0692xeC8uQVhmO7cZbVTKkNQavPdir7n91FvfsdVBpGlnp8WzwA2zN8dgELwN6cPshB+mt8sp5ei/hdiN7DcorZK/S8F003c8Clw0hPSFG2VYeSQ8ZQkoj6Xzxu1VgUxb3uxR0jh5V/N9jTXFYix17rCkOa4VjjzVNc2De2KeQ1qmRtNoykh5Q54w29kNYcRHW+sD+9qqMdwDIewr6W7wCMeU38TLDVB3BEfZ+Bfa3TzTrbREhXRZ1WXiLNuzPBP825DMV7anSq9hShxfjaT7h8DqAg2BuG65xM0/foay/AgwAzVefd5V3qsgAAAAASUVORK5CYII="/>
                    </defs>
                    </svg>
                </div>
                <form onSubmit={handleSubmit} className="data-entery flex flex-col items-center">
                    <div className={`name ${focusedInput.name ? "focused" : ""}`}>
                        <input
                        type="text"
                        id="name"
                        className="input"
                        value={values.name}
                        onFocus={() => handleFocus("name")}
                        onBlur={() => handleBlur("name")}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required/>
                        <label htmlFor="name">ENTER YOUR NAME*</label>
                    </div>
                    <div className={`email ${focusedInput.email ? "focused" : ""}`}>
                        <input type="email"
                        id="email"
                        className="input"
                        value={values.email}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required/>
                        <label htmlFor="email">ENTER YOUR EMAIL*</label>
                    </div>
                    <div className={`number ${focusedInput.number ? "focused" : ""}`}>
                        <input type="number"
                        id="number"
                        className="input"
                        value={values.number}
                        onFocus={() => handleFocus("number")}
                        onBlur={() => handleBlur("number")}
                        onChange={(e) => handleChange("number", e.target.value)}
                        />
                        <label htmlFor="number">PHONE NUMBER</label>
                    </div>
                    <div className={`message ${focusedInput.message ? "focused" : ""}`}>
                        <textarea name="message"
                        id="message"
                        className="input"
                        rows={6}
                        value={values.message}
                        onFocus={() => handleFocus("message")}
                        onBlur={() => handleBlur("message")}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required></textarea>
                        <label htmlFor="message">YOUR MESSAGE*</label>
                    </div>
                    <button className="secondary-btn" type="submit" disabled={loading}>{loading ? "SENDING..." : "SUBMIT"}</button>
                </form>
            </div>
            {showPopup && (
                <Popup message={popupMessage} onClose={() => setShowPopup(false)} type={popupType}/>
            )}
        </section>
    )
}