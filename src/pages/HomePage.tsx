import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/debounce'
import { useSearchUsersQuery } from '../store/github/gitgub.api'


const HomePage = () => {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounced =  useDebounce(search)
  const { isLoading, isError, data: users } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  })

  // console.log(data);
  

  useEffect(() => {
    setDropdown(debounced.length > 3 && users?.length! > 0)
  }, [debounced, users])
  
  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {isError && <p className='text-center text-red-400'>Something went wrong</p>}


      <div className='relative w-[560px]'>
        <input type="text"
          className='border py-2 px-4 w-full h-[42px] mb-2'
          placeholder='Search for GitHub username...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {dropdown &&
          <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll'>
            {isLoading && <p className='text-center'>Loading...</p>}
            {users?.map(u => (
              <li key={u.id}
                className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
              >
                {u.login}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  )
}

export default HomePage