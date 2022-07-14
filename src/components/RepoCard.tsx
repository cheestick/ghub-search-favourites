import React from 'react'
import { IRepo } from '../models/models'

const RepoCard = ({repos}: {repos: IRepo}) => {
  return (
      <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transtion-all'>
        <a href={repos.html_url} target='_blank' rel="noreferrer">
              <h2 className='text-lg font-bold'>{repos.full_name}</h2>
              <p className='text-sm'>
                  Forks: <span className='font-bold mr-2'>{repos.forks}</span>
                  Watchers: <span className='font-bold'>{repos.watchers}</span>
              </p>
              <p className='text-sm font-thin'>{repos?.description}</p>
        </a >
    </div>
  )
}

export default RepoCard