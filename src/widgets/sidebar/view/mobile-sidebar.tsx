import geeksLogo from '@/shared/assets/images/geeks 2.png';
import playerLogo from '@/shared/assets/images/yellow-logo.svg';
import { useSession } from '@/shared/model/use-session';
import { Dialog } from '@/shared/ui/kit/dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/ui/kit/popover';
import { sidebarItems } from '@/shared/utils/consts/consts';
import { GameRules } from '@/widgets/game-rules';
import { LogOut, Menu } from 'lucide-react';
import { useState } from 'react';

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [isGameRulesOpen, setIsGameRulesOpen] = useState(false);
  const { session, logout } = useSession();

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className='fixed top-4 right-4 z-50 hidden max-sm:block'>
            <button
              onClick={() => setOpen(!open)}
              className='text-yellow-400 bg-[#212121] p-2! rounded-md shadow'
            >
              <Menu className='w-6 h-6' />
            </button>
          </div>
        </PopoverTrigger>

        <PopoverContent
          side='bottom'
          className='w-[300px] p-4! mr-4! mt-2! bg-[#393939] border-none text-white'
        >
          <div className='flex justify-center mt-2!'>
            <img src={geeksLogo} alt='geeks' width={140} height={37} />
          </div>

          <div className='rounded bg-[#212121] p-2! my-4! flex items-center gap-2.5'>
            <div className='w-[28px] h-[28px] bg-white rounded-full border border-[#F5D91F] py-[5px]! pl-[6.75px]! pr-[7.75px]!'>
              <img
                src={playerLogo}
                alt='player logo'
                width={13.5}
                height={18}
              />
            </div>
            {session?.login}
          </div>

          <div className='flex flex-col bg-[#393939]'>
            {sidebarItems.map((item, idx) => (
              <div
                key={idx}
                className='w-full py-3! px-6! rounded text-base font-medium flex items-center gap-2.5 cursor-pointer hover:bg-[#494949]'
                onClick={() => {
                  if (item.lable === 'Правила игры') {
                    setIsGameRulesOpen(true);
                  }
                }}
              >
                <img src={item.icon} alt={item.lable} width={26} height={26} />
                {item.lable}
              </div>
            ))}

            <div
              onClick={logout}
              className='w-full py-3! px-6! rounded text-base font-medium flex items-center gap-2 text-white cursor-pointer hover:bg-[#494949] mt-5!'
            >
              <LogOut />
              Выйти
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Диалог "Правила игры" */}
      <Dialog open={isGameRulesOpen} onOpenChange={setIsGameRulesOpen}>
        <GameRules />
      </Dialog>
    </>
  );
}
