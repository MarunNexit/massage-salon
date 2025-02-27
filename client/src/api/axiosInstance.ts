import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_API;

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error("Server Error:", error.response.data);

            if (error.response.status === 401) {
                alert("Ваша сесія закінчилася. Будь ласка, увійдіть знову.");
                window.location.href = "/";
            }

            if (error.response.status === 403) {
                alert("У вас немає доступу до цієї сторінки.");
                window.location.href = "/no-access"; //
            }
        } else if (error.request) {
            console.error("Network Error:", error.message);
            alert("Помилка мережі. Перевірте ваше інтернет-з'єднання.");
        } else {
            console.error("Error:", error.message);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;