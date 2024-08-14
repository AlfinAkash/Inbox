import { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <div
                className="w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center cursor-pointer transition-colors duration-300 ease-in-out"
                onClick={() => setDarkMode(!darkMode)}
            >
                <div
                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                        darkMode ? 'translate-x-8' : 'translate-x-0'
                    }`}
                ></div>
            </div>
        </div>
    );
};

export default ThemeToggle;
