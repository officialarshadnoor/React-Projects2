import './App.css';
import { useEffect, useState } from 'react';
import { apiUrl, filterData } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
 
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // save data into a variable
      setCourses(output.data);
    } catch (error) {
      toast.error("Error fetching data");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <div className='min-h-screen bg-slate-600 flex flex-col'>
      <div>
        <Navbar />
      </div> 
      <div className=''>
      <div>
        <Filter filterData={filterData} 
        category={category}
        setCategory={setCategory}
        />
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center min-h-[50vh]'>
        {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
      </div>
      </div>
   
    </div>
  );
};

export default App;