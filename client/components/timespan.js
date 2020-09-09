import React from 'react'

const Timespan = ({ setTimespan }) => {
  return (
    <div>
      <button type="button" className="mr-2 bg-teal-300 px-2 rounded" onClick={() => setTimespan()}>
        All time
      </button>
      <button
        type="button"
        className="mr-2 bg-teal-300 px-2 rounded"
        onClick={() => setTimespan('day')}
      >
        {' '}
        day
      </button>
      <button
        type="button"
        className="mr-2 bg-teal-300 px-2 rounded"
        onClick={() => setTimespan('week')}
      >
        {' '}
        week
      </button>
      <button
        type="button"
        className="mr-2 bg-teal-300 px-2 rounded"
        onClick={() => setTimespan('month')}
      >
        {' '}
        month
      </button>
    </div>
  )
}

export default Timespan
