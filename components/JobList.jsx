import Link from 'next/link';
import Image from 'next/image';

const JobList = ({ datas }) => {
	const imgExternal = ({ src }) => src;

	return (
		<ul>
			{datas &&
				datas.map((job) => (
					<li key={job.id} className='mb-4 p-3'>
						<div className='flex items-center mb-3 justify-between'>
							<div className='flex gap-3 items-center'>
								{job.company_logo ? (
									<Image
										src='https://cdn.pixabay.com/photo/2014/02/01/17/30/apple-256268_960_720.jpg'
										width={60}
										height={60}
										loader={imgExternal}
										className='rounded-full'
										alt={job.title}
										unoptimized
									/>
								) : (
									''
								)}

								<h2>{job.title}</h2>
							</div>
							<span>{job.type}</span>
						</div>

						<div className='flex justify-between'>
							<address>{job.location}</address>

							<time dateTime={new Date(job.created_at)}>
								{job.created_at}
							</time>
						</div>

						<div
							dangerouslySetInnerHTML={{
								__html: job.description,
							}}
						></div>

						<p>
							How to apply:
							<span
								className='ml-2'
								dangerouslySetInnerHTML={{
									__html: job.how_to_apply,
								}}
							></span>
						</p>
					</li>
				))}
		</ul>
	);
};

export default JobList;
