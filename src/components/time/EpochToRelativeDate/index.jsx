/* --- Global --- */
import React, {useEffect, useState} from 'react';
import {DateTime} from 'luxon';

const EpochToRelativeDate = props => {
  const SecondsToMilli = 1000;
  const [epoch] = useState(props.epoch);
  const [relative, setRelative] = useState(0);
  useEffect(() => {
    const DateFromMillis = DateTime.fromMillis(props.epoch * SecondsToMilli);
    if (DateFromMillis.isValid) setRelative(DateFromMillis.toRelative());
  }, [epoch]);
  return relative ? <span>{relative}</span> : null;
};
export default EpochToRelativeDate;
