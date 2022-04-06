import { useEffect, useState } from 'react';
import axios from 'axios';
import { Title } from './components/title';


function App() {

  const [title, setTitle] = useState<string>("")

  const fetchTitle = async () => {
    const { data: { title } } = await axios.get('http://127.0.0.1:5000/');
    setTitle(title);
  }

  useEffect(() => {
    fetchTitle()
  }, []);

  return (
    <div className="App">
      <Title title={title} />
    </div>
  );
}

export default App;