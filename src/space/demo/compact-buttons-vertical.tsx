/**
 * title: 垂直方向紧凑布局
 * description: 垂直方向紧凑布局。
 */

import React from 'react';
import { Space } from 'rabbit-ui';

export default () => {
    return (
        <Space.Compact direction='vertical'>
            <button className='demo-btn'>Button 1</button>
            <button className='demo-btn'>Button 2</button>
            <button className='demo-btn'>Button 3</button>
            <button className='demo-btn'>Button 4</button>
            <button className='demo-btn'>Button 5</button>
        </Space.Compact>)
};

/*
.demo-btn {
    border: 1px solid;
    border-radius: 4px;
    height: 32px;
    width: 80px;
}
*/