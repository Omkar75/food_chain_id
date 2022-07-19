import React from 'react'
import { Button } from 'react-bootstrap';
const Addrow = ({details,handleAddNewUser, handleChangeNewUser}) => {
  return (
    <>
    <tr>{Object.entries(details).map((ass, index) => {
        return (
          <td className="" key={index}>
            <input
            className="!text-sm !font-light p-1"
              type="text"
              name={ass[0]}
              value={details[ass[0]]}
              placeholder={ass[0]}
              onChange={handleChangeNewUser}
              required="true"
            />
          </td>
        );
        
      })}</tr>
      </>
  )
}

export default Addrow