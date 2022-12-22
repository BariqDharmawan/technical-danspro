import { useRef, useState } from 'react';
import Checkbox from '../../components/Checkbox';
import JobList from '../../components/JobList';
import Spinner from '../../components/Spinner';
import useJobList from '../../hooks/useJobList';

const Job = () => {
	const [jobs, setJobs] = useState([]);

	const searchRef = useRef(null);
	const [search, setSearch] = useState('');
	const { isError, isLoading, jobLists } = useJobList();
	const [isRemote, setIsRemote] = useState(true);

	const searchLocation = () => {
		return jobLists.filter((filterData) => {
			if (search) return filterData.location.includes(search);
			return true;
		});
	};

	if (isLoading) return <Spinner />;

	let filteredDatas = searchLocation().filter((jobList) => {
		if (isRemote) return jobList.location.includes('Remote');
		return true;
	});

	return (
		<>
			<h1>
				Filternya is remote aja, karena klo is full time semua datanya
				full time jd engga keliatan klo udh ke filter atau blm
			</h1>
			<div>
				<input
					type='checkbox'
					id='is-remote'
					onChange={(e) => setIsRemote(e.target.checked)}
				/>
				<label htmlFor='is-remote'>Is Remote</label>
			</div>

			<form
				className='flex items-center'
				id='form-search-location'
				onSubmit={(e) => {
					e.preventDefault();
					setSearch(searchRef.current.value);
				}}
			>
				<input
					type='search'
					id='search-location'
					placeholder='Search Location'
					ref={searchRef}
					className='border border-gray-300 p-3 rounded'
				/>
				<button type='submit' className='bg-blue-600 text-white'>
					Search
				</button>
			</form>
			<JobList datas={filteredDatas} />
		</>
	);
};

export default Job;
