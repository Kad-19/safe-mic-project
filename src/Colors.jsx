import React from 'react'

const Colors = () => {
  return (
    <div>
        <div className="flex flex-wrap gap-4">
  <div className="w-32 h-32 bg-primary relative overflow-hidden rounded-lg">
    <div className="absolute inset-0 bg-gradient-to-b opacity-50"></div>
    <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">--primary</p>
  </div>
  <div className="w-32 h-32 bg-secondary relative overflow-hidden rounded-lg">
    <div className="absolute inset-0 bg-gradient-to-b opacity-50"></div>
    <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">--secondary</p>
  </div>
  <div className="w-32 h-32 bg-muted relative overflow-hidden rounded-lg">
    <div className="absolute inset-0 bg-gradient-to-b opacity-50"></div>
    <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">--muted</p>
  </div>
  <div className="w-32 h-32 bg-accent relative overflow-hidden rounded-lg">
    <div className="absolute inset-0 bg-gradient-to-b opacity-50"></div>
    <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">--accent</p>
  </div>
  <div className="w-32 h-32 bg-destructive relative overflow-hidden rounded-lg">
    <div className="absolute inset-0 bg-gradient-to-b opacity-50"></div>
    <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">--destructive</p>
  </div>
</div>

    </div>
  )
}

export default Colors