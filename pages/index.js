const DemoReview = dynamic(() => import("@/components/elements/DemoReview"), {
  ssr: false,
});

import Layout from "@/components/layout/Layout";
import Info from '../db/data.json'
import dynamic from "next/dynamic";
import { useState } from 'react';
import Link from "next/link";
export default function Home1() {

  const [sortedInfo, setSortedInfo] = useState(Info)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' })
  const [editValues, setEditValues] = useState({})
  const [editRow, setEditRow] = useState(null)


  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }

    const sortedArray = [...sortedInfo].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1
      return 0
    })

    setSortedInfo(sortedArray);
    setSortConfig({ key, direction })
  }

  const handleInputChange = (e, key) => {
    setEditValues({
      ...editValues,
      [key]: e.target.value,
    })
  }

  const handleEdit = (index) => {
    setEditRow(index)
    setEditValues(sortedInfo[index])
  }

  const handleSave = (index) => {
    const updatedData = [...sortedInfo]
    updatedData[index] = editValues
    setSortedInfo(updatedData)
    setEditRow(null)
  };
  return (
    <>
      <Layout headerStyle={2} footerStyle={6}>

        <div id="page" className="page-wrapper bg-black">
            <div className="pt-[80px] m-5"> 
              
              <table className='table-fixed border-separate border-spacing-3 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                  <thead> 
                    <tr>
                      {Object.keys(Info[0]).map((key) => (
                        <th key={key} onClick={() => handleSort(key)} className='font-body border-2  border-amber-700 text-base text-cyan-400 bg-black text-center p-[12px] rounded-lg shadow-md italic'>
                          {key}
                          
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedInfo.map((item, index) => (
                      <tr key={index}>
                        
                        {Object.entries(item).map(([key, value], i) => (
                          <td className={`font-serif border text-sm text-center p-[9px] ${value === item._id ? 'text-black bg-slate-400 rounded-lg text-sm' : 'text-white'}`} key={i}>
                            {editRow === index ? (
                              <input type='text' className="text-black" value={editValues[key]} onChange={(e) => handleInputChange(e, key)} />) : (value)
                              
                            }
                            
                          </td>
                        ))}
                        {editRow === index ? (
                          <button onClick={() => handleSave(index)} className="text-green-500 p-[10px] hover:bg-slate-400 hover:text-red-700 hover:rounded-lg text-sm">Save</button>
                        ) : (
                          <button onClick={() => handleEdit(index)} className="text-blue-500 p-[10px] hover:bg-slate-400 hover:text-black hover:rounded-lg text-sm">Edit</button>
                        )} 
                      </tr>
                      
                      
                    ))}
                  </tbody>
              </table>

            </div>
        </div>

      </Layout>
    </>
  )
}
