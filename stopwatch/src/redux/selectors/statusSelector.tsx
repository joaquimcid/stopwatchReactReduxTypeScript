// import React from 'react';
import {useSelector} from 'react-redux';
import { StopWatchStatusEnum } from '../reducers/StopWatchStatusEnum';

interface RootState {
  status:StopWatchStatusEnum,
}

const selectStatus = (state: RootState) => state.status

export const currentStatus = useSelector(selectStatus);
