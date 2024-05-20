'use client'

import { Button, CustomHeader } from '@/components';
import React, { useState } from 'react';

const DemoPage =()=>{
    return(
        <>
        <CustomHeader header="Buttons"/>
        <div className='flex gap-2 flex-wrap'>
        <Button buttonProps={{
            text:"Default-Button",
        }}/>
         <Button buttonProps={{
            text:"Back-Button",
        }} parentClassName="back-button"/>
           <Button buttonProps={{
            text:"Icon-right",
            forward:true,
            iconPos:"right"
        }}/>
          <Button buttonProps={{
            text:"Icon-left",
            forward:true,
            iconPos:"left"
        }}/>
        </div>
        </>
    )

}

export default DemoPage;