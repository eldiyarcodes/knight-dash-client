import { MultiContainer } from '../../shared/ui/multi-container/MultiContainer';
import { LeaderBoard } from '../../widgets/leader-board';
import { LeaderboardFilter } from './filter';
import classes from './leaderboards.module.scss';

const LeaderBoards = () => {
  return (
    <MultiContainer className={classes.wrapper}>
      <div className={classes.inner}>
        <LeaderBoard variant={'page'} />
        <LeaderboardFilter />
      </div>
    </MultiContainer>
  );
};

export const Component = LeaderBoards;
