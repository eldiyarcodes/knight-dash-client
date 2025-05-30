import clsx from 'clsx';
import { useEffect, type FC } from 'react';
import { useUser } from '../../../features/auth/model/use-user';
import { Spin } from '../../../shared/ui/spiner/spin';
import { useGame } from '../../../shared/utils/hooks/use-game';
import { useLeaderBoard } from '../model/useLeaderBoard';
import classes from './leader-board.module.scss';

export const LeaderBoard: FC<{ variant: 'page' | 'game-room' }> = ({
  variant,
}) => {
  const { data, getLeaderboards, isLoading, filterMode } = useLeaderBoard();
  const { player } = useUser();
  const { gameMode } = useGame();

  useEffect(() => {
    getLeaderboards(variant === 'page' ? filterMode : gameMode);
  }, [filterMode, gameMode]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.leaderBoard}>
        <h3>LEADERBOARD:</h3>

        {isLoading && (
          <div className={classes.spinner}>
            <Spin />
          </div>
        )}
        {data?.length > 0 && !isLoading ? (
          <ul className={classes.list}>
            {data?.map((user, idx) => (
              <li key={user._id} className={classes.player}>
                <p className={classes.login}>
                  {idx + 1}.{' '}
                  <span
                    className={clsx(user._id === player?._id && classes.itsMe)}
                  >
                    {user.login}
                  </span>
                </p>
                <p className={classes.score}>{user.score}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={classes.notPlayers}>
            {!isLoading && 'Скоро тут появиться игроки'}
          </p>
        )}
      </div>
    </div>
  );
};
