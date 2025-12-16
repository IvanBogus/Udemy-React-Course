import React, { Suspense } from 'react'

const LabViewer = ({ labComponent: LabComponent }) => {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading lab...</div>}>
        <LabComponent />
      </Suspense>
    </div>
  )
}

export default LabViewer

