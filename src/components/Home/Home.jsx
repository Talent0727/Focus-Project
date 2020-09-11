import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import headerBackground from '../../assets/images/Banner.jpg';
import Filter from '../filter/Filter';
import JobCard from '../jobCard/JobCard';
import Footer from '../footer/Footer';
import Layout from '../Layout';
import Spinner from '../spinner/Spinner';

const Home = () => {
  const [jobCardsDefault, setJobCardsDefault] = useState([]);
  const [jobCards, setJobCards] = useState([]);
  const [minSalary, setMinSalary] = useState(11);
  const [maxSalary, setMaxSalary] = useState(99);
  const [dataFilter, setDataFiler] = useState([])
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://jobs-platzi-master.herokuapp.com/jobs/some/15')
      .then((response) => response.json())
      .then((data) => {
        setJobCardsDefault(data.body);
      });
  }, []);

  useEffect(() => {
    fetch('https://jobs-platzi-master.herokuapp.com/jobs')
      .then((response) => response.json())
      .then((data) => {
        setJobCards(data.body);
      });
  }, []);

  // Set salary values
  const handleSalaryValuesFilter = (event) => {
    if(event.currentTarget.value === '') {
      setMinSalary(11);
      setMaxSalary(99)
    } else {
      const value = event.currentTarget.value.split('-');
      setMinSalary(Number(value[0]));
      setMaxSalary(Number(value[1]));
    }
  };

  // Data to be render when filter is use
  React.useMemo(() => {
    const result = jobCards.filter(job => {
      if(!query) return
    
      if (query || minSalary !== 0 || maxSalary !== 0) {
        return (job.JobTitle.toLowerCase().includes(query.toLowerCase()) || job.Location.toLowerCase().includes(query.toLowerCase()) || job.Profile.toLowerCase().includes(query.toLowerCase())) && (Number(job.MinSalaryEstimate) >= minSalary && Number(job.MaxSalaryEstimate) <= maxSalary);
      }
    })

    setDataFiler(result)

  }, [jobCards, query, minSalary, maxSalary])

  const dataDefaultRender = () => {
    return jobCardsDefault.length > 0 ? jobCardsDefault.map((job) => (
      <JobCard
        key={job.Id}
        logo={job.Images}
        time={job.Time}
        jobTitle={job.JobTitle}
        location={job.Location}
        salary={job.Revenue}
        profile={job.Profile}
        id={job.Id}
      />
    )) : <Spinner />;
  };

  const dataFilterRender = () => {
    return dataFilter.length > 0 ? dataFilter.map((job) => (
      <JobCard
        key={job.Id}
        logo={job.Images}
        time={job.Time}
        jobTitle={job.JobTitle}
        location={job.Location}
        salary={job.Revenue}
        profile={job.Profile}
        id={job.Id}
      />
    )) : <Spinner />;
  };

  return (
    <>
      <Header bgImage={headerBackground}>
        <div className='container'>
          <div>
            <h2 className='principal-text'>Encuentra tu empleo ideal</h2>
          </div>
          <div className='filter'>
            <div className='input-search-text'>
              <p className='text-filter'>Cualquier término</p>
            </div>
          </div>
          <div className='wrap'>
            <div className='search'>
              <input
                type='text'
                className='searchTerm'
                placeholder='What are you looking for?'
                onChange={(e) => { setQuery(e.target.value); }}
              />
              <button type='submit' className='searchButton'>
                <div className='search-solid icon' />
              </button>
            </div>
          </div>

          <div>
            <select name='ranking' id='ranking' className='ranking-form' onChange={handleSalaryValuesFilter}>
              <option value=''>Select your ranking</option>
              <option value='11-20'>$11K - $20K USD</option>
              <option value='21-30'>$21K - $30K USD</option>
              <option value='31-40'>$31K - $40K USD</option>
              <option value='41-50'>$41K - $50K USD</option>
              <option value='51-60'>$51K - $60K USD</option>
              <option value='61-70'>$61K - $70K USD</option>
              <option value='71-80'>$71K - $80K USD</option>
              <option value='81-90'>$81K - $90K USD</option>
              <option value='91-99'>$91K - $99K USD</option>
            </select>
          </div>
        </div>
      </Header>
      <Layout>
        {
          dataFilter.length === 0 ? dataDefaultRender() : dataFilterRender()
        }
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
