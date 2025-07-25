import geeksLogo from '@/shared/assets/images/geeks 2.png';
import playerLogo from '@/shared/assets/images/yellow-logo.svg';
import { useSession } from '@/shared/model/use-session';
import { Dialog } from '@/shared/ui/kit/dialog';
import { Sheet, SheetContent, SheetHeader } from '@/shared/ui/kit/sheet';
import { sidebarItems } from '@/shared/utils/consts/consts';
import { GameRules } from '@/widgets/game-rules';
import { ArrowRight, LogOut } from 'lucide-react';
import { useState } from 'react';

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isGameRulesOpen, setIsGameRulesOpen] = useState(false);
  const { session } = useSession();

  return (
    <>
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className='max-sm:hidden fixed left-0 z-40 h-screen w-[60px] cursor-pointer rounded-r-md bg-[#393939] text-[#F5D91F] flex items-center justify-center shadow-lg'
        >
          <ArrowRight />
        </div>
      )}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side='left'
          className='w-[322px] h-full bg-[#393939] border-none! outline-none! px-5! pt-7! text-white gap-5 pb-[100px]!'
        >
          <div className='flex-grow flex flex-col gap-5 pb-[100px]! overflow-y-auto'>
            <SheetHeader>
              <div className='flex justify-center'>
                <img src={geeksLogo} alt='geeks' width={189} height={37} />
              </div>
            </SheetHeader>

            <div className='rounded bg-[#212121] p-2! mt-4! flex items-center gap-2.5'>
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
                  <img
                    src={item.icon}
                    alt={item.lable}
                    width={26}
                    height={26}
                  />
                  {item.lable}
                </div>
              ))}
            </div>
          </div>

          <div className='w-full py-3! px-6! rounded text-base font-medium flex items-center gap-2 text-white cursor-pointer hover:bg-[#494949]'>
            <LogOut />
            Выйти
          </div>
        </SheetContent>
      </Sheet>

      <Dialog open={isGameRulesOpen} onOpenChange={setIsGameRulesOpen}>
        <GameRules />
      </Dialog>
    </>
  );
}
