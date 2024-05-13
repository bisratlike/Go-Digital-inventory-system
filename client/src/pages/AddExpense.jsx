import React from 'react'
import SideBar from '../components/SideBar'
import NewInputHeader from '../components/NewInputHeader'
import InputField from '../components/Expense/InputField'

const AddExpense = () => {
  return (
    <div className="pageContainer flex">
        <SideBar/>
        <div className="main__field-container w-full p-0 lg:p-6">
          <NewInputHeader title='Expense'/>
          <InputField />
          
        </div>
        
        
    </div>
  )
}

export default AddExpense