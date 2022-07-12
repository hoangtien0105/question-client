import React, { useEffect, useRef, useState } from 'react'

export default function Loading() {
    return (<div className='loading-wrapper' style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(10,10,10,0.5)' }}>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>)

}
