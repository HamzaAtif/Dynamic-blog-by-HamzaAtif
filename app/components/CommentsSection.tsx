"use client"
import React, { useEffect, useState } from 'react'

export default function CommentsSection() {
  const [comment,setComment] = useState("")
  const [comments, setComments] = useState<string[]>([])
  
  useEffect(()=>{
    const storingcomments = localStorage.getItem("comments")
    if(storingcomments){
      try{
      setComments(JSON.parse(storingcomments)) //JSON.parse(): This function converts a JSON string into a JavaScript object
      }
      catch (error){
      console.error("Error on parsing comments from local storage",error)
    
    }}
},[])

useEffect(()=>{
  localStorage.setItem('comments', JSON.stringify(comments))
}, [comments])

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e. preventDefault()

    setComments([...comments,comment])
    setComment("")

  }

  return (
    <div className='max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-6'>
      <h2 className='mb-5 font-bold text-2xl'>Comment section</h2>
      <form onSubmit={handleSubmit} className='mb-4'>
        <textarea 
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className='w-full p-3 border rounded-md border-gray-400 focus:outline-none 
        focus:ring-2 focus:ring-blue-400'
        placeholder='Write a comment ...'
        ></textarea>
        <button type='submit' className='mt-2 w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none'>
          Post comment
        </button>
      </form>
      <div>
        <h3 className='text-xl font-semibold mb-2'>Comments:</h3>
        <div className='space-y-4'>
          {
            comments.length > 0 ? comments.map((comment,i)=>{
              return(
                <div key={i}>
                  <p className='text-md bg-gray-200 p-2 h-[40px] rounded-md'>{comment}</p>
                </div>
                
              )
            })
            :
            <p>No comments yet, be the first one!</p>
          }
        </div>
      </div>
    </div>
  )
}
