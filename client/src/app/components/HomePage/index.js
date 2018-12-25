import React, { Fragment } from 'react';
import { compose } from 'recompose';

// import ProgressBar from 'components/ProgressBar';
// import Question from 'components/Question';
// import Highlight from 'components/Highlight';
// import Timer from 'components/Timer';
// import TimerM from 'components/TimerM';
// import CountDown from 'components/CountDown';

const Component = ({ someProp }) => (
  <Fragment>
    {/* <ProgressBar /> */}
    {/* <Highlight /> */}
    {/* <Question /> */}
    {/* <CountDown /> */}
    <div>Hello</div>
  </Fragment>
);

export default compose()(Component);
