import { ToggleSwitch } from './ToggleSwitch';
import { Moon } from './icons/Moon';
import { Settings } from './icons/Settings';
import { Sun } from './icons/Sun';

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-7 py-4 sticky">
      <div>
        <h1 className="font-ubuntu text-4xl">shinjo</h1>
      </div>
      <div className="flex items-center space-x-9">
        <div>
          <p className="font-medium">Your timezone:</p>
          <p className="font-semibold">Tokyo, Japan (JST)</p>
        </div>
        <div className="flex items-center space-x-8">
          <ToggleSwitch inactiveLabel="12h" activeLabel="24h" />
          <ToggleSwitch
            inactiveLabel={<Sun tailwind="w-5 h-5 fill-white-bg" />}
            activeLabel={<Moon tailwind="w-5 h-5 fill-white-bg" />}
          />
        </div>
        <div className="flex items-center">
          <button className="p-1">
            <Settings tailwind="h-7 w-7 fill-bg-black-text" />
          </button>
        </div>
      </div>
    </header>
  );
};
