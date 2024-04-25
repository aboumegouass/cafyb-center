import { useState } from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
    const [colorTheme, setTheme]: any = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <div className="flex items-center justify-center transition-all duration-150 rounded-full shadow-sm bg-slate-600 text-slate-100 hover:bg-slate-700 w-9 h-9 dark:bg-slate-700 dark:text-slate-900">
            <DarkModeSwitch color='white' checked={darkSide} onChange={toggleDarkMode} size={16} />
        </div>
    );
}