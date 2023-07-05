import React from 'react'

const Select = ({options, value, setSelect}) => {

  return (
    <select value={value} onChange={({target}) => setSelect(target.value)}>
      <option value='' disabled>Filter by type</option>
      {options.map(item => <option key={item} value={item}>{item}</option>)}
    </select>
  )
}

export default Select