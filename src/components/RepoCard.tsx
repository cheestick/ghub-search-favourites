import React, { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from '../models/models'

const RepoCard = ({ repos }: { repos: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions()
  const { favourites } = useAppSelector(state => state.github)

  const [isFav, setIsFav] = useState(favourites.includes(repos.html_url))

  const addToFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repos.html_url)
    setIsFav(true)
  }

  const removeFromFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault()
    removeFavourite(repos.html_url)
    setIsFav(false)
  }

  return (
      <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transtion-all'>
        <a href={repos.html_url} target='_blank' rel="noreferrer">
              <h2 className='text-lg font-bold'>{repos.full_name}</h2>
              <p className='text-sm'>
                  Forks: <span className='font-bold mr-2'>{repos.forks}</span>
                  Watchers: <span className='font-bold'>{repos.watchers}</span>
              </p>
        <p className='text-sm font-thin'>{repos?.description}</p>
        
        {!isFav &&
          <button
            className='py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all'
            onClick={addToFavourites}>
            Add
          </button>
        }

        {isFav &&
          <button
            className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'
            onClick={removeFromFavourites}>
            Remove
          </button>
        }
        </a >
    </div>
  )
}

export default RepoCard